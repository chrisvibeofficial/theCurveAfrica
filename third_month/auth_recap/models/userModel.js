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
  userName: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  gender: {
    type: String,
    require: true,
    enum: ['Male', 'Female']
  },
  profilePics: {
    imageUrl: { type: String, require: true },
    publicId: { type: String, require: true }
  },
  phoneNumber: {
    type: String,
    require: true
  },
  isVerified: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const userModel = mongoose.model('users', userSchema);

module.exports = userModel