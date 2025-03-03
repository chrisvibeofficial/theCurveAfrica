const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vibeofficial:1234567890@firstreferencing.cssri.mongodb.net/firstReferencing')
  .then(() => {
    console.log('Connection to database has been established')
  })
  .catch((error) => {
    error.message
  })