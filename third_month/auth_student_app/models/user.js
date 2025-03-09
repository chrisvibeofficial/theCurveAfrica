const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
  userName: {
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
  isAdmin: {
    type: String,
    default: false
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  scoreId: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'scores'
  }]
}, { timestamps: true });

const userModel = mongoose.model('users', userSchema);

module.exports = userModel