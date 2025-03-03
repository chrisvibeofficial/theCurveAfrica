const studentModel = require('../models/student');

exports.createStudent = async (req, res) => {
  try {
    const { fullName, email, gender, age, stack, phoneNumber } = req.body;
    const student = await studentModel.find({ email: email });

    const emailRan1 = Math.floor(Math.random() * 1000);
    const emailRan2 = Math.floor(Math.random() * 100);

    if (student.length == 1) {
      return res.status(400).json({
        message: `${email} has already been used by another student. Try ${email.slice(0, -10).toLowerCase()
          + emailRan1 + email.slice(-10)} or ${email.slice(0, -10).toLowerCase() + emailRan2 + email.slice(-10)}`
      })
    }

    const newStudent = await studentModel.create({fullName, email, gender, age, stack, phoneNumber});
    res.status(201).json({
      message: 'Student created successfully',
      data: newStudent
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Internal server error'
    })
  }
}