const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    departmentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'department'
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
    patients:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patient'
    }]
})


const Doctor = mongoose.model('doctor', doctorSchema);


module.exports = { Doctor };