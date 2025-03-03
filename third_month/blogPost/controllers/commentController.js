const commentModel = require('../models/comment');
const postModel = require('../models/post');
const userModel = require('../models/user');

exports.createComment = async (req, res) => {
  try {
    const { userId, postId } = req.params;
    const { comment } = req.body;
    const user = await userModel.findByPk(userId);
    const post = await postModel.findByPk(postId);

    if (!user) {
      res.status(400).json('User does not exist')
    }
    
    const commentId = Math.floor(Math.random() * 10000000);

    const newComment = await commentModel.create({
      id: commentId,
      comment,
      userName: user.fullName,
      postId: post.id
    });

    res.status(201).json({
      message: 'Comment successfully created',
      data: newComment
    })
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    })
  }
}