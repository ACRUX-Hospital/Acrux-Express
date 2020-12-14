const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//const joi = require("@hapi/joi");
const Patient = require('../model/patientSchema').Patient;
exports.signup = async (req, res) => {


    const isEmailExsist = await Patient.findOne({ email: req.body.email })
    if (isEmailExsist) return res.status(400).send("email already exist")
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const patient = new Patient({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        phoneNumber: req.body.phoneNumber
    });

    try {

        const savedPatient = await patient.save();
        const token = await jwt.sign({ _id: patient._id }, process.env.TOKEN);
        res.header("login", token)
        res.json({ token, userId: savedPatient._id })

    }
    catch (err) {
        res.status(400).send(err);
    }


}

exports.signin =  async(req, res) => {
   
   const patient = await Patient.findOne({ email: req.body.email })
   
   if(patient){
    
    const validPassword = await bcrypt.compare(req.body.password, patient.password);
   // console.log(validPassword)
     if (!validPassword) return res.status(400).send("password is wrong");

     const token = await jwt.sign({ _id: patient._id }, process.env.TOKEN);
     res.send( token)
    console.log('token >>',token)
    res.header("token", token).json({
        sucess: true,
        token: token
      })

   }
}