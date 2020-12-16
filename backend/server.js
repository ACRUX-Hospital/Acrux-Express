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
 

app.use(express.urlencoded({ extended: true })) 
app.use(express.json()) 
// app.use(express.static(__dirname + '/../client/public'));
app.use(cors())


app.use('/', Route);


app.listen(5000, () => {
  console.log('listening on 5000')
})