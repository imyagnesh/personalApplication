const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const sendJSONresponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};

module.exports.register = (req, res) => {
  if (!req.body.name || !req.body.userName || !req.body.password || !req.body.role) {
    sendJSONresponse(res, 400, {
      message: 'All fields required',
    });
    return;
  }

  const user = new User();

  user.name = req.body.name;
  user.userName = req.body.userName;
  user.setPassword(req.body.password);
  user.role = req.body.role;

  user.save((err) => {
    if (err) {
      res
        .status(404)
        .json(err);
      return;
    }
    const token = user.generateJwt();
    res.status(200);
    res.json({
      token,
    });
  });
};

module.exports.login = (req, res) => {
  if (!req.body.userName || !req.body.password) {
    sendJSONresponse(res, 400, {
      message: 'All fields required',
    });
    return;
  }

  passport
    .authenticate('local', (err, user, info) => {
      // If Passport throws/catches an error
      if (err) {
        res
          .status(404)
          .json(err);
        return;
      }

      // If a user is found
      if (user) {
        const token = user.generateJwt();
        res.status(200);
        res.json({
          token,
        });
      } else {
        // If user is not found
        res
          .status(401)
          .json(info);
      }
    })(req, res);
};
