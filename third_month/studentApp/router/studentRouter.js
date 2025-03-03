const { createStudent } = require('../controller/studentController');

const router = require('express').Router();

router.post('/student', createStudent);

module.exports = router