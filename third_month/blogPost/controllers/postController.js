const postModel = require('../models/post');
const userModel = require('../models/user');

exports.createPost = async (req, res) => {
  try {
    const { userId } = req.params;
    const { content } = req.body;
    const user = await userModel.findByPk(userId);

    if (!user) {
      return res.status(400).json('User does not exist')
    }

    const postId = Math.floor(Math.random() * 10000000);

    const newPost = await postModel.create({
      id: postId,
      userId: user.id,
      content,
      user: user.id
    });

    res.status(201).json({
      message: 'New post created',
      data: newPost
    })
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    })
  }
}