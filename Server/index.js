const express=require('express');
const cors=require('cors');
const mongoose = require('mongoose');
const userRoute=require('./Routes/userRouter');
const chatRoute=require('./Routes/chatRouter');
const messageRoute=require('./Routes/messageRoute');
const AdminRoute =require('./Routes/AdminRouter')
const productsRouter =require('./Routes/productsRouter');
const bodyParser = require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));
require("dotenv").config();
  
app.use(cors());
// creating a middleware
app.use("/api/users" ,userRoute);
app.use("/api/chats",chatRoute);
app.use("/api/messages",messageRoute);
app.use("/api/Admin",AdminRoute)
app.use("/api/product",productsRouter);

//CRUD operation 
app.get("/",(req,res)=>{
    res.send("Welcome to our chat api")
})

const port= process.env.PORT || 5000;
const uri= process.env.ATLAS_URI;
app.listen(port,(req,res)=>{
 console.log(`server is running on ${port}`)
})

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("Mongodb connection established")).catch((error)=>console.log("Mongo db connection failed",error.message))

