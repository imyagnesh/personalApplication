const fetch = require('node-fetch');

const token = '230516988.e8bc56c.b404415711764815951a3dfd6cfc4710';

module.exports.instaImages = (req, res) => {
  fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}&count=10`)
    .then(response => response.json())
    .then(result => {
      const images = result.data.map(data => data.images.low_resolution);
      res.status(200).send(images);
    }).then(err => res.status(400).send(err));
};
