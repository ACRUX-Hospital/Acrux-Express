const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    image: {
        type: String
    },
    bloodTepe: {
        type: String
    },
    address: {
        type: String
    },
    doctor:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctor'
    }]
})


const Patient = mongoose.model('patient', patientSchema);


module.exports = { Patient };