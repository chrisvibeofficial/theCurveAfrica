const { register, verify, login, registerTeacher } = require('../controllers/managementController');
const { authorizeManagement } = require('../middlewares/authorization');

const router = require('express').Router();

router.post('/register/management', register);
router.get('/verify-account/:token', verify);
router.post('/access', login);
router.post('/register/teacher', authorizeManagement, registerTeacher);

module.exports = router;