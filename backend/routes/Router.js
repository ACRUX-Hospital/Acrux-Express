const express = require('express')
const router = express.Router();
const Patient = require('../controller/patient')
router.post('/signup', Patient.signup);
router.post('/signin', Patient.signin);

module.exports = router;