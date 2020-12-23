const mongoose = require('mongoose');

const patientDoctorSchema = mongoose.Schema({
    doctorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    patientID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }

})


const PatientDoctor = mongoose.model('patientDoctor', patientDoctorSchema);


module.exports = { PatientDoctor  };