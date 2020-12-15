const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({

    chatroom: {
        type: mongoose.Schema.Types.ObjectId,
        required: "Chatroom is required!",
        ref: "Chatroom",
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: "Chatroom is required!",
        ref: "User",
      },
      message: {
        type: String,
        required: "Message is required!",
      },
})


const Message = mongoose.model('message', messageSchema);


module.exports = { Message };