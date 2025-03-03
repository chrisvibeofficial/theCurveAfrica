const studentDB = '../database/student.json';
const {v4: uuidv4} = require('uuid');

const creatStudent = async (req, res) => {
  try {
    await studentDB;
    const studentInfo = req.body;
    const studentId = uuidv4();
    studentInfo.id = studentId;
    studentDB.push(studentInfo)
  }catch (error) {
    res.status(500).json({
      message: 'Internal Error',
      error: error.message
    })
  }
}

module.exports = {creatStudent}