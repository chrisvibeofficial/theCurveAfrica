const { createPost } = require('../controllers/postController');

const router = require('express').Router();
router.post('/post/:userId', createPost)

module.exports = router