const express = require('express')

const app =  express()
app.use(express.json())
require('dotenv').config()
const {userController} = require("./routes/user.routes")
const PORT = process.env.PORT || 4000;
const {connection} = require("./config/db")
const cors = require("cors");

// GET all todos
app.get('/', (req, res) => {
    res.send("todddos");
  });


  app.use(cors());

app.use("/user", userController)
  



app.listen(PORT, async(req, res)=>{
  try{
      await connection;
      console.log("connected to db")
  }
  catch(err){
      console.log("error in connection", err)
  }
  console.log(`listening on port  ${PORT}`)
})

// app.listen(PORT, (e)=>{
//        console.log(`Server is running on http://localhost:${PORT}`)
// })