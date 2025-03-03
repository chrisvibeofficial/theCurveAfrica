const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('../middleware/nodemailer');
const sendMail = require('../middleware/nodemailer');
const { signUpTemplate } = require('../utils/mailTemplates');


exports.register = async (req, res) => {
  try {
    const { fullName, email, password, gender } = req.body;
    const existUser = await userModel.find({ email: email.toLowerCase() });

    if (existUser.length === 1) {
      return res.status(400).json({
        message: `${email} has already been used`
      })
    };

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new userModel({
      fullName,
      email,
      password: hashedPassword,
      gender
    });

    await user.save();

    const token = await jwt.sign({ userId: user._id }, process.env.JWT_Secret, { expiresIn: '1h' });
    const link = `${req.protocol}://${req.get('host')}/api/v1/user-verify/${token}`;
    const firstName = user.fullName.split(' ')[1];
    const html = signUpTemplate();

    const mailOptions = {
      subject: 'Welcome Email',
      email: user.email,
      html
    };

    await sendMail(mailOptions);
    await user.save();

    res.status(201).json({
      message: 'User registered successfully',
      data: user
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Error registering user'
    })
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await userModel.findOne({ email: email.toLowerase() });

    if (userExist === 0) {
      return res.status(404).json({
        message: `User with email ${email} does not exist`
      })
    };

    const isCorrectPassword = await bcrypt.compare(password, userExist.password);

    if (isCorrectPassword === false) {
      return res.status(400).json({
        message: 'Incorrect password'
      })
    };

    
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Error Logging user in'
    })
  }
};