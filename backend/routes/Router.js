const express = require('express')
const router = express.Router();
const User = require('../controller/user');
const Doctor = require('../controller/doctor')
const Patient = require('../controller/patient')
const Department = require('../controller/department')
const auth = require('../middleware/auth')


//User
router.post('/signup', User.signup);
router.post('/signin', User.signin);
router.get('/auth',auth, User.auth);
//Doctor
router.post('/createDoc', Doctor.createDoc);
router.get('/getDoc',Doctor.FindAllDocById)
//Patient
router.post('/createPat', Patient.createPat);
//Department
router.post('/createDep', Department.createDep);
router.get('/getDep',Department.getDepartments)


module.exports = router;