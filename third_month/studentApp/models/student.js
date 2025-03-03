const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  gender: {
    type: String,
    require: true,
    enum: ['Male', 'Female']
  },
  age: {
    type: Number,
    require: true
  },
  stack: {
    type: String,
    require: true,
    enum: ['Frontend', 'Backend', 'Product-Design']
  },
  phoneNumber: {
    type: String,
    require: true
  },
  scoreId: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'scores'
  }]
}, { timestamps: true });

const studentModel = mongoose.model('students', studentSchema);

module.exports = studentModel