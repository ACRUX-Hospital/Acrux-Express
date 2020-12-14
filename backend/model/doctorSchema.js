const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({

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
    }
})


const Doctor = mongoose.model('doctor', doctorSchema);


module.exports = { Doctor };