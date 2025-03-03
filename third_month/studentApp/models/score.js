const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  week: {
    type: Number,
    require: true
  },
  puntuality: {
    type: Number,
    require: true
  },
  assignment: {
    type: Number,
    require: true
  },
  attendance: {
    type: Number,
    require: true
  },
  classAccessment: {
    type: Number,
    require: true
  },
  personalDefence: {
    type: Number,
    require: true
  },
  totalScoreForTheWeek: {
    type: Number,
    require: true
  },
  averageScoreForTheWeek: {
    type: Number,
    require: true
  },
  averageTotal: {
    type: String,
    require: true
  },
}, { timestamp: true });

const scoreModel = mongoose.model('scores', scoreSchema);

module.exports = scoreModel