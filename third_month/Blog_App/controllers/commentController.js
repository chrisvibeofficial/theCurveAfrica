const commentModel = require('../models/comment');
const postModel = require('../models/post');
const userModel = require('../models/user');


exports.createComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;
    const user = await postModel.findOne({ userId: id });

    if (!user) {
      return res.status(404).json({
        message: 'No comment for non-existing post'
      })
    };

    const newComment = new commentModel({
      comment,
      user: user.user,
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: ' Internal Server Error'
    })
  }
}