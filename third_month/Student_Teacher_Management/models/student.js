const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true
  },
  gmail: {
    type: String,
    require: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    require: true
  },
  gender: {
    type: String,
    require: true,
    enum: ['Male', 'Female']
  },
  scoreId: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'scores'
  }],
  isVerified: {
    type: Boolean,
    default: false
  },
}, { timestamps: true });

const studentModel = mongoose.model('students', studentSchema);

module.exports = studentModel