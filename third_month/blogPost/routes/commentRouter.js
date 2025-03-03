const { createComment } = require('../controllers/commentController');

const router = require('express').Router();
router.post('/comment/:userId/:postId', createComment)

module.exports = router