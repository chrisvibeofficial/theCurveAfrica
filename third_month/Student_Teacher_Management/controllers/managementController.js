const managementModel = require('../models/management');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { verify_account } = require('../helper/account-verification');
const { emailSender } = require('../middlewares/nodemailer');
const teacherModel = require('../models/teacher');
const studentModel = require('../models/student');


exports.register = async (req, res) => {
  try {
    const { fullName, email, gender, password, confirmPassword } = req.body;

    if (!fullName || !email || !gender || !password || !confirmPassword) {
      return res.status(400).json({
        message: 'Please input all field'
      })
    };

    const existingManagement = await managementModel.findOne({ email: email.toLowerCase() });

    if (existingManagement) {
      return res.status(400).json({
        message: `Account with ${email} already exist`
      })
    };

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: 'Password does not match'
      })
    }

    const saltedRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltedRound);

    const management = new managementModel({
      fullName,
      email,
      gender,
      password: hashedPassword,
      isSuperAdmin: true
    });

    const token = jwt.sign({ managementId: management._id }, process.env.JWT_SECRET, { expiresIn: '5mins' });
    const link = `${req.protocol}://${req.get('host')}/api/v1/verify-account/${token}`;
    const firstName = management.fullName.split(' ')[0];

    const mailDetails = {
      subject: 'Email Verification',
      email: management.email,
      html: verify_account(link, firstName)
    };

    emailSender(mailDetails);
    await management.save();

    res.status(201).json({
      message: 'Management Account Created Successfully',
      data: management
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      meaasage: 'Error Registering Management'
    })
  }
};



exports.verify = async (req, res) => {
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
          const { managementId } = jwt.decode(token);

          if (!managementId) {
            return res.status(404).json({
              message: 'ManagementId not found'
            })
          };

          const management = await managementModel.findById(managementId);

          if (!management) {
            return res.status(404).json({
              message: 'Management not found'
            })
          };

          if (management.isVerified === true) {
            return res.status(400).json({
              message: 'Management: Account has already been verified'
            })
          }

          const newToken = jwt.sign({ managementId: management._id }, process.env.JWT_SECRET, { expiresIn: '5mins' });
          const link = `${req.protocol}://${req.get('host')}/api/v1/verify-account/${newToken}`;
          const firstName = management.fullName.split(' ')[0];

          const mailDetails = {
            subject: 'Resend: Email Verification',
            email: management.email,
            html: verify_account(link, firstName)
          };

          emailSender(mailDetails);

          res.status(200).json({
            message: 'Session expired: Link has been sent to your Email address'
          })
        }
      } else {
        const management = await managementModel.findById(payload.managementId);

        if (!management) {
          return res.status(404).json({
            message: 'Management not found'
          })
        };

        if (management.isVerified === true) {
          return res.status(400).json({
            message: 'Management: Account has already been verified'
          })
        }

        management.isVerified = true;
        await management.save();

        res.status(200).json({
          message: 'Management: Account verified successfully'
        })
      }
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Error Verifying Management'
    })
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({
        message: 'Please input email'
      })
    };

    if (!password) {
      return res.status(400).json({
        message: 'Please input password'
      })
    };

    const management = await managementModel.findOne({ email: email.toLowerCase() });

    if (!management) {
      return res.status(404).json({
        message: 'Account does not exist'
      })
    };

    const isCorrectPassword = await bcrypt.compare(password, management.password);

    if (!isCorrectPassword) {
      return res.status(400).json({
        message: 'Incorrect Password'
      })
    };

    if (management.isVerified === false) {
      const token = jwt.sign({ managementId: management._id }, process.env.JWT_SECRET, { expiresIn: '5mins' });
      const link = `${req.protocol}://${req.get('host')}/api/v1/verify-account/${token}`;
      const firstName = management.fullName.split(' ')[0];

      const mailDetails = {
        subject: 'Email Verification',
        email: management.email,
        html: verify_account(link, firstName)
      };

      emailSender(mailDetails);
      res.status(400).json({
        message: 'Account Not Verified: Link has been sent to your email'
      })
    };

    const token = jwt.sign({ managementId: management._id }, process.env.JWT_SECRET, { expiresIn: '5mins' });

    res.status(200).json({
      message: 'Account Successfully Logged In',
      data: management.fullName,
      token
    })

  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Error Logging Management IN'
    })
  }
};


exports.registerTeacher = async (req, res) => {
  try {
    const { fullName, email, gender, password, confirmPassword } = req.body;

    if (!fullName || !email || !gender || !password || !confirmPassword) {
      return res.status(400).json({
        message: 'Please input all field'
      })
    };

    const existingteacher = await teacherModel.findOne({ email: email.toLowerCase() });

    if (existingteacher) {
      return res.status(400).json({
        message: `Account with ${email} already exist`
      })
    };

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: 'Password does not match'
      })
    }

    const saltedRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltedRound);

    const newTeacher = new teacherModel({
      fullName,
      email,
      gender,
      password: hashedPassword,
    });

    const token = jwt.sign({ teacherId: newTeacher._id }, process.env.JWT_SECRET, { expiresIn: '5mins' });
    const link = `${req.protocol}://${req.get('host')}/api/v1/verify-account/${token}`;
    const firstName = newTeacher.fullName.split(' ')[0];

    const mailDetails = {
      subject: 'Email Verification',
      email: newTeacher.email,
      html: verify_account(link, firstName)
    };

    emailSender(mailDetails);
    await newTeacher.save();

    res.status(201).json({
      message: 'Teacher Account Created Successfully',
      data: newTeacher
    })

  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Error Registering Teachers'
    })
  }
};


exports.registerStudent = async (req, res) => {
  try {
    const { fullName, email, gender, password, confirmPassword } = req.body;

    if (!fullName || !email || !gender || !password || !confirmPassword) {
      return res.status(400).json({
        message: 'Please input all field'
      })
    };

    const existinstudentr = await studentModel.findOne({ email: email.toLowerCase() });

    if (existingstudent) {
      return res.status(400).json({
        message: `Account with ${email} already exist`
      })
    };

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: 'Password does not match'
      })
    }

    const saltedRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltedRound);

    const newstudent = new studentModel({
      fullName,
      email,
      gender,
      password: hashedPassword,
    });

    const token = jwt.sign({ studentId: newstudent._id }, process.env.JWT_SECRET, { expiresIn: '5mins' });
    const link = `${req.protocol}://${req.get('host')}/api/v1/verify-account/${token}`;
    const firstName = newstudent.fullName.split(' ')[0];

    const mailDetails = {
      subject: 'Email Verification',
      email: newstudent.email,
      html: verify_account(link, firstName)
    };

    emailSender(mailDetails);
    await newstudent.save();

    res.status(201).json({
      message: 'student Account Created Successfully',
      data: newstudent
    })

  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Error Registering students'
    })
  }
};