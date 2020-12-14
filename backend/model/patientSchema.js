const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({

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


const Patient = mongoose.model('patient', patientSchema);


module.exports = { Patient };