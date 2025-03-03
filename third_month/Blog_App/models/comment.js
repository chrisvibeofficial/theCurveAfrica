// Created the structure of the comment model, how the collection (table) is going to look like.
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
  },
  user: {
    type: String,
    require: true
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'users'
  },
  postId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'comments'
  },
  repliesId: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'posts'
  }]
}, { timestamps: true });

const userModel = mongoose.model('comments', commentSchema);

module.exports = userModel;