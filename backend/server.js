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
var cors = require('cors')
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
  socket.on('join', ({ room }) => {
    console.log(room)
    socket.join(room)
    console.log(`joined at ${room}`)
    socket.emit("data", { "asem": "hello" })
  })
  socket.on('messages', ({ message, room }) => { // to get the data from front emit function
    console.log(message, room)
    io.to(room).emit('newMessage', { message })
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