const { createUser, getUserWithPostAndComments } = require('../controllers/userController');

const router = require('express').Router();
router.post('/user', createUser);
router.get('/user-trend/:id', getUserWithPostAndComments);

module.exports = router