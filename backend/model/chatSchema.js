const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    roomID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    UserID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    message: {
        type: String
    }
},{ timestamps: true })


const Chat = mongoose.model('department', chatSchema);


module.exports = { Chat };