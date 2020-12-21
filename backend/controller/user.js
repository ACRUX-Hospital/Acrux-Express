const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../model/userSchema').User;


exports.signup = async (req, res) => {
    const isEmailExsist = await User.findOne({ email: req.body.email })
    if (isEmailExsist) return res.status(400).send("email already exist")
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        phoneNumber: req.body.phoneNumber,
        role: req.body.role,
    });

    try {

        const savedUser = await user.save();
        const token = await jwt.sign({ _id: user._id }, process.env.secret);
        res.header("login", token)
        res.json({ token, userId: savedUser._id })

    }
    catch (err) {
        res.status(400).send(err);
    }


}

exports.signin = async (req, res) => {
    console.log(req.body)

    const user = await User.findOne({ email: req.body.email })
    // console.log('userr',user)

    if (user) {
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send("password is wrong");

        const token = await jwt.sign({ _id: user._id }, process.env.secret);
    
        res.header("token", token).json({
            sucess: true,
            user,
            token: token
        })

    }
}


exports.auth =  (req, res) => {
    // console.log('here',req.user)
    if (req.user) {
      res.json({
        _id: req.user._id,
        name: req.user.name,
        password: req.user.password,
        email: req.user.email,
        phoneNumber:req.user.email,
        role:req.user.role
      })
    }
  }