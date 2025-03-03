const userModel = require('../models/user');
const cloudinary = require('../config/cloudinary');
const bcrypt = require('bcrypt');
const fs = require('fs');
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const existUser = await userModel.findOne({ email: email.toLowerCase() });
    if (existUser) {
      fs.unlinkSync(req.file.path);
      return res.status(400).json({
        message: `User with Email: ${email} already exist`
      })
    };
    const result = await cloudinary.uploader.upload(req.file.path);
    fs.unlinkSync(req.file.path);
    const saltRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltRound);
    const user = new userModel({
      fullName,
      email,
      password: hashedPassword,
      profile: {
        publicId: result.public_id,
        imageUrl: result.secure_url
      }
    });

    await user.save();
    res.status(201).json({
      message: 'User registered successfully',
      data: user
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Internal Server Error'
    })
  }
};


exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({
        message: 'Please enter your email'
      })
    };

    if (!password) {
      return res.status(400).json({
        message: 'Please enter your password'
      })
    };

    const user = await userModel.findOne({ email: email.toLowerCase() });

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) {
      return res.status(400).json({
        message: 'Incorrect Password'
      })
    };

    if (user.isVerified === false) {
      const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '5mins'});
      const link = `${req.protocol}://${req.get('host')}/api/v1/verify-account/${token}`;
      const firstName = user.fullName.split(' ')[0];

      const mailDetails = {
        subject: 'Email Verification',
        email: user.email,
        html
      };

      mailSender(mailDetails);

      res.status(200).json({
        message: 'Account Not Verified: Link has been sent to email address'
      })
    }

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '5mins'});

    res.status(200).json({
      message: 'Login Successfully',
      data: user.fullName,
      token
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Internal Server Error'
    })
  }
}


exports.getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json({
      message: 'All users below',
      totalUsers: users.length,
      data: users
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Internal Server Error'
    })
  }
};

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }
    const existUser = await userModel.findById(id);
    res.status(200).json({
      message: 'Check user below',
      data: existUser
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Internal Server Error'
    })
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    };

    const data = {
      password,
      profile: user.profile
    };

    if (req.file && req.file.path) {
      await cloudinary.uploader.destroy(user.profile.publicId);
    };

    const result = await cloudinary.uploader.upload(req.file.path);
    fs.unlinkSync(req.file.path);

    data.profile = {
      imageUrl: result.secure_url,
      publicId: result.public_id
    }

    const updatedUser = await userModel.findByIdAndUpdate(id, data, { new: true });

    res.status(200).json({
      message: 'User updated successfully',
      data: updatedUser
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Internal Server Error'
    })
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    };

    const deletedUser = await userModel.findByIdAndDelete(id);

    if (deletedUser) {
      await cloudinary.uploader.destroy(user.profile.publicId)
    }

    res.status(200).json({
      message: 'User deleted successfully'
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Internal Server Error'
    })
  }
};