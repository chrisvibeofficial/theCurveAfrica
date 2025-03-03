const scoreModel = require('../models/score');
const studentModel = require('../models/student');

exports.createScore = async (req, res) => {
  try {
    const { id } = req.params;
    const { puntuality, assignment, attendance, classAccessment, personalDefence } = req.body;
    const student = await studentModel.findById(id);

    if (!student) {
      return res.status(404).json({
        message: 'Student not found'
      })
    }

    
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Internal server error'
    })
  }
}