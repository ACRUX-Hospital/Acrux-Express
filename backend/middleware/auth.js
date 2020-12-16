const jwt = require('jsonwebtoken');
const User = require('../model/userSchema').User;



const auth = async (req, res, next) => {
 const token = req.header('login');
 if (!token)
   return res.status(401).json({ msg: 'No token, authorization denied' });

 try {
   // Verify token
   const decoded = await jwt.verify(token,process.env.secret);

   const user = await User.findOne({ _id: decoded._id })
   console.log(user)
   req.User = user;
   next();
 } catch (e) {
   res.status(400).json({ msg: 'Token is not valid' });
 }
};
module.exports = auth
