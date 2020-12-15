const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    image: {
        type: String
    },
    about: {
        type: String
    }
})


const Department = mongoose.model('department', departmentSchema);


module.exports = { Department };
