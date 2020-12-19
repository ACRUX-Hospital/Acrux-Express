const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config();
const Route = require('./routes/Router')
mongoose.connect(process.env.DB_CONNECT,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })

  .then(() => console.log('MongoDB Connected correctly ...'))
  .catch(err => console.log(err))

const express = require('express')
const app = express()
var cors = require('cors');
const { Chatroom, } = require('./model/chatRoomSchema');
const {Chat}=require("./model/chatSchema")
const server = require('http').createServer(app);

 
const options = {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
};
var io = require('socket.io')(server,options)


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(express.static(__dirname + '/../client/public'));
app.use(cors())

app.post('/trial' , (req,res) => {
  // console.log(req)
  console.log(req.body)
  res.json({success:true})
})


io.on('connection', (socket) => {


  console.log(`New connection ! + ${socket.id}`)
  socket.on('join', async({ room }) => {
    console.log(room)
    socket.join(room)
    let dbRoom=await Chatroom.findOne({roomName:room}).populate('messages')
    if(!dbRoom){
      let newRoom=new Chatroom({roomName:room})
      await newRoom.save()

    }else{
      // let roomMessages= await dbRoom.populate('messages')
      socket.emit("data",  {messages:dbRoom.messages} )
    }
    console.log(`joined at ${room}`)
  })


  socket.on('messages', async({ message, room }) => { // to get the data from front emit function
    console.log(message, room)
    let chat =new Chat({roomID:room,UserName:"asem",message})
    let chatObj=await chat.save()
    let roomName=await Chatroom.findOne({roomName:room})
    await Chatroom.updateOne({_id:roomName._id},{messages:[...roomName.messages,chatObj._id]})
    io.to(room).emit('newMessage', chat)
  })
  socket.on('disconnect', () => {
    console.log('user has left')
  })
})
// app.get("/", (req, res) => {
//   res.status(200).json({ response: "Server is up and running." });
// });

app.use('/', Route);


server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`))