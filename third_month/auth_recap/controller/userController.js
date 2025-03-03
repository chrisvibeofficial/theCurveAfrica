const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cloudinary = require('../config/cloudinary');
const fs = require('fs');
const { verifyMail, forgotPassword } = require('../helper/verifyMail');
const { mailSender } = require('../middlewares/nodemailer');


exports.register = async (req, res) => {
  try {
    const { fullName, email, userName, password, gender, phoneNumber } = req.body;
    const file = req.file;

    const existingUsername = await userModel.findOne({ userName: userName });
    const existingEmail = await userModel.findOne({ email: email.toLowerCase() });

    if (existingEmail) {
      fs.unlinkSync(file.path)
      return res.status(400).json({
        message: 'Email already exist'
      })
    };

    if (existingUsername) {
      return res.status(400).json({
        message: 'Username already exist'
      })
    }

    const result = await cloudinary.uploader.upload(file.path);
    fs.unlinkSync(file.path)

    const saltRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltRound);

    const newAccount = new userModel({
      fullName,
      email,
      userName,
      password: hashedPassword,
      gender,
      phoneNumber,
      profilePics: {
        imageUrl: result.secure_url,
        publicId: result.public_id
      }
    });

    const token = await jwt.sign({ userId: newAccount._id }, process.env.JWT_SECRET, { expiresIn: '1min' });
    const link = `${req.protocol}://${req.get('host')}/api/v1/account-verify/${token}`;
    const firstName = newAccount.fullName.split(' ')[0];
    const html = verifyMail(link, firstName);

    const mailDetails = {
      email: newAccount.email,
      html: html,
      subject: 'Email Verification'
    };

    await mailSender(mailDetails);
    await newAccount.save();

    res.status(201).json({
      message: 'Account Registered Successfully',
      data: newAccount
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Error Registering User'
    })
  }
};


exports.verifyAccount = async (req, res) => {
  try {
    const { token } = req.params;

    if (!token) {
      return res.status(404).json({
        message: 'Token not found'
      })
    };

    jwt.verify(token, process.env.JWT_SECRET, async (error, payload) => {
      if (error) {
        if (error instanceof jwt.JsonWebTokenError) {
          const decodedToken = jwt.decode(token)
          const user = await userModel.findById(decodedToken.userId);

          if (user === null) {
            return res.status(404).json({
              message: 'Account not found'
            })
          }

          if (user.isVerified === true) {
            return res.status(400).json({
              message: 'Account already verified'
            })
          }

          const newToken = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1min' });
          const link = `${req.protocol}://${req.get('host')}/api/v1/account-verify/${newToken}`;
          const firstName = user.fullName.split(' ')[0];
          const html = verifyMail(link, firstName);

          const mailDetails = {
            email: user.email,
            html: html,
            subject: 'Email Verification'
          };

          mailSender(mailDetails);

          res.status(200).json({
            message: 'Verification link sent to email'
          })
        }
      } else {
        const user = await userModel.findById(payload.userId);

        if (user === null) {
          return res.status(404).json({
            message: 'Account not found'
          })
        };

        if (user.isVerified === true) {
          return res.status(400).json({
            message: 'Account already verified'
          })
        };

        user.isVerified = true;
        await user.save();

        res.status(200).json({
          message: 'Account verified successfully'
        })
      }
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Error Registering User'
    })
  }
};


exports.loginAccout = async (req, res) => {
  try {
    const { email, userName, password } = req.body;
    const user = await userModel.findOne({ userName: userName } || { email: email.toLowerCase() });

    if (user.email === null || user.userName === null) {
      return res.status(404).json({
        message: 'Account not found'
      })
    };

    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword === false) {
      return res.status(400).json({
        message: 'Incorrect password'
      })
    }

    if (user.isVerified === false) {
      return res.status(400).json({
        message: 'Please verify your accout. A link has been sent to your email'
      })
    }

    jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1min' });

    res.status(200).json({
      message: 'Login successfully'
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Error Logging User in'
    })
  }
};


exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (email === null) {
      return res.status(400).json({
        message: 'Enter your email address'
      })
    }
    
    const user = await userModel.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }

    const token = await jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1min'});
    const link = `${req.protocol}://${req.get('host')}/api/v1/reset-password/${token}`;
    const firstName = user.fullName.split(' ')[1];

    const mailDetails = {
      subject: 'Reset password',
      email: user.email,
      html: forgotPassword(link, firstName)
    }

    await mailSender(mailDetails);

    res.status(200).json({
      message: 'Password reset link sent to email'
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Error resetting password'
    })
  }
}