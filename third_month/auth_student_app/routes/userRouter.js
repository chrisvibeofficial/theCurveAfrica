const router = require('express').Router();
const { register, verifyAccount, loginAccout, forgotPassword } = require('../controller/userController');
const uploads = require('../middlewares/multer');

router.post('/register', uploads.single('profilePics'), register);
router.get('/account-verify/:token', verifyAccount);
router.post('/account-login', loginAccout);
router.post('/reset-password/:token', forgotPassword);

module.exports = router