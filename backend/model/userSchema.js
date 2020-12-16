const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

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
    },
    role: {
        type: String
    }
})


const User = mongoose.model('user', UserSchema);


module.exports = { User };