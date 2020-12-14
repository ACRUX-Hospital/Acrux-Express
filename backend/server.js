const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config();
const Route = require('./routes/Router')
mongoose.connect( process.env.DB_CONNECT,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })

  .then(() => console.log('MongoDB Connected correctly ...'))
  .catch(err => console.log(err))

const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true })) // to parse the data
app.use(express.json()) // to make the content header     application/json
// app.use(express.static(__dirname + '/../front/public'));


//app.use('/users', require('./routes/users')
app.use('/', Route);


app.listen(5000, () =>{
    console.log('listening on 5000' )
})