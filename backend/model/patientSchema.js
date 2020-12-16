const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    userID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    image: {
        type: String
    },
    bloodTepe: {
        type: String
    },
    address: {
        type: String
    }
})


const Patient = mongoose.model('patient', patientSchema);


module.exports = { Patient };