const mongoose = require('mongoose');

const managementSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true
  },
  email: {
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
  teacherId: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'teachers'
  }],
  isVerified: {
    type: Boolean,
    default: false
  },
  isSuperAdmin: {
    type: Boolean,
    default: false
  },
}, { timestamps: true });

const managementModel = mongoose.model('managements', managementSchema);

module.exports = managementModel