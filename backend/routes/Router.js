const express = require('express')
const router = express.Router();
const User = require('../controller/user')
const Department = require('../controller/department')
const auth = require('../middleware/auth')
router.post('/signup', User.signup);
router.post('/signin', User.signin);

router.post('/createDep', Department.createDep);
router.get('/auth',auth, User.auth);
module.exports = router;