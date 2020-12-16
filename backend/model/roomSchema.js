const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PatientDoctor'
    },

})


const Room = mongoose.model('room', roomSchema);


module.exports = { Room };