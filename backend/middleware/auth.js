const jwt = require('jsonwebtoken');
const User = require('../model/userSchema').User;



const auth = async (req, res, next) => {
 const token = req.header('login');
//  console.log('token', token)
 if (!token)
   return res.status(401).json({ msg: 'No token, authorization denied' });

 try {
   // Verify token
   const decoded = await jwt.verify(token,process.env.secret);
   
   const newUser = await User.findOne({ _id: decoded._id })
   
   req.user = newUser;
  //  console.log('user',req.user)
   
   next();
 } catch (e) {
   res.status(400).json({ msg: 'Token is not valid' });
 }
};
module.exports = auth
