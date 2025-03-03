const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
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
  studentId: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'students'
  }],
  isVerified: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
}, { timestamps: true });

const teacherModel = mongoose.model('teachers', teacherSchema);

module.exports = teacherModel