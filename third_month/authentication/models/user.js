const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true
  },
  gender: {
    type: String,
    require: true,
    enum: ['Male', 'Female']
  },
  password: {
    type: String,
    require: true
  },
  isVerified: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;