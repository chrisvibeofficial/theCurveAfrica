// Created the structure of the user model, how the collection (table) is going to look like.
const mongoose = require('mongoose');
const { image } = require('../config/cloudinary');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    lowercase: true
  },
  password: {
    type: String,
    require: true
  },
  profile: {
    imageUrl: {
      type: String,
      require: true
    },
    publicId: {
      type: String,
    }
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  postId: [{
    type: mongoose.SchemaTypes.ObjectId,
    require: true,
    ref: 'posts'
  }],
}, { timestamps: true });

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;