const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
  },
  userName: {
    type: String,
    unique: [
      true, 'User Name should be unique.',
    ],
    required: [true, 'userName is required.'],
  },
  role: {
    type: String,
    enum: ['admin'],
  },
  hash: String,
  salt: String,
});

userSchema.methods.setPassword = (password) => {
  this.salt = crypto
    .randomBytes(16)
    .toString('hex');
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64)
    .toString('hex');
};

userSchema.methods.validPassword = (password) => {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64)
    .toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = () => {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    userName: this.userName,
    name: this.name,
    role: this.role,
    exp: parseInt(expiry.getTime() / 1000, 10),
  }, 'MY_SECRET'); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

// // on every save, add the date
// userSchema.pre('save', (next) => {
//   // get the current date
//   const currentDate = new Date();
//   // change the updated_at field to current date
//   this.updated_at = currentDate;
//   // if created_at doesn't exist, add to that field
//   if (!this.created_at) {
//     this.created_at = currentDate;
//   }
//   next();
// });

mongoose.model('User', userSchema);
