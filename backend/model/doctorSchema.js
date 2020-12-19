const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    departmentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    },
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


const Doctor = mongoose.model('doctor', doctorSchema);


module.exports = { Doctor };