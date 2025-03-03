const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'students'
  },
  week: {
    type: Number,
    require: true
  },
  punctuality: {
    type: Number,
    require: true,
  },
  attendance: {
    type: Number,
    require: true
  },
  classAccessment: {
    type: Number,
    require: true,
  },
  personalDefence: {
    type: Number,
    require: false
  },
  assignment: {
    type: Number,
    require: false
  },
  toatalScore: {
    type: Number,
    require: false
  },
  averageScore: {
    type: String,
    require: false
  },
}, { timestamps: true });

const scoreModel = mongoose.model('scores', scoreSchema);

module.exports = scoreModel