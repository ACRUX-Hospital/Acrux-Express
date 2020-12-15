const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
     phoneNumber: {
        type: String
    }, bloodType: {
        type: String
    },image:{
        type: String 
    }
})


const User = mongoose.model('user', userSchema);


module.exports = { User };