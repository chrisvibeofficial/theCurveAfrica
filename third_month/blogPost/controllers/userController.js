const userModel = require('../models/user');
const postModel = require('../models/post');
const comment = require('../models/comment');

exports.createUser = async (req, res) => {
  try {
    const { fullName, age, email } = req.body;

    const user = await userModel.findOne({
      where: { email: email }
    });

    const emailRanNum1 = Math.floor(Math.random() * 1000);
    const emailRanNum2 = Math.floor(Math.random() * 100);

    if (user) {
      return res.status(400).json(`${email} has already been used. Try ${email.slice(0, -10).toLowerCase()
        + emailRanNum1 + email.slice(-10)} or ${email.slice(0, -10).toLowerCase()
        + emailRanNum2 + email.slice(-10)}`)
    }

    const idRanNum1 = Math.floor(Math.random() * 1000);
    const idRanNum2 = Math.floor(Math.random() * 100);
    const ID = 'REG' + idRanNum1 + 'ID' + idRanNum2

    const newUser = await userModel.create({
      id: ID,
      fullName,
      age,
      email: email.toLowerCase()
    });

    res.status(201).json({
      message: 'User created successfully',
      data: newUser
    })
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    })
  }
}

exports.getUserWithPostAndComments = async (req, res) => {
  try {
    const { id, postId } = req.params;
    const user = await userModel.findByPk(id);
    const post = await postModel.findByPk(postId);

    if (!user) {
      return res.status(404).json('User not found')
    }

    const trend = await userModel.findOne({
      where: { id: user.id },
      include: [{
        model:post,
        attributes: ['content'],
        as: 'posts'
      },
      {
        model: comment,
        attributes: ['comment', 'userName'],
        as: 'comments'
      }]
    });

    res.status(200).json({
      message: 'Check trend below',
      data: trend
    })
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    })
  }
}