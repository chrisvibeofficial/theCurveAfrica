const joi = require('joi');

exports.registerValidateSchema = joi.object().keys({
  fullName: joi.string().max(255).min(3).trim().required(),
  email: joi.string().max(255).min(3).trim().email().required(),
  userName: joi.string().max(255).min(3).trim().required(),
  password: joi.string().max(255).min(3).trim().required(),
  gender: joi.string().max(6).min(4).trim().valid('Male', 'Female').required(),
});

exports.loginValidateSchema = joi.object().keys({
  email: joi.string().max(255).min(3).trim().email().required(),
  userName: joi.string().max(255).min(3).trim().required(),
  password: joi.string().max(255).min(3).trim().required(),
})