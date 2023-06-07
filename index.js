//Loads .env file contents into process.env.
require('dotenv').config()
const express = require('express')
const cors  = require('cors')
require('./db/connection')
const router = require('./Routes/router')

const server = express()

server.use(cors())
server.use(express.json())
server.use(router)
const PORT = 4000 || process.env.PORT
//export uploads as static files/ folder to client
server.use('/uploads',express.static('./uploads'))

server.listen(PORT,()=>{
    console.log(`EMS Server Started at port number ${PORT}`);
})

server.get('/',(req,res)=>{
    res.send("EMS Server Started...")
})