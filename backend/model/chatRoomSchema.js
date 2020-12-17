const mongoose = require('mongoose');

const chatRoomSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    }
})


const Chatroom = mongoose.model('chatRoom', chatRoomSchema);


module.exports = { Chatroom };