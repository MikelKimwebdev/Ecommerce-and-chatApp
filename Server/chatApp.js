const express=require('express');

const app=express();

const http= require('http');

const {Server}=require('socket.io');//grabbing library socket.io in the class Server
const cors =require("cors")
const server=http.createServer(app);//creating http server in express
// variable io will be used in doing anything related to io
const io =new Server(server,{
    cors:{
        origin:"http://localhost:3000",//where is frontend located
        method:["GET","POST"]//method used
    },
});
// how we listen to events from the frontend by using .on
io.on('connection',(socket) => {
   console.log(`User Connected : ${socket.id}`);//each user in the server will have a unique id
   socket.on('send_message',(data)=>{
    // console.log(data); //just testing the connection
    /*we need to emit it to some people*/
     socket.broadcast.emit("receive_message",data);
     /*for broadcast only allows message to be send to only you but emit allows it to be send to
     anyone coonected to the server*/
    //  the receive is an event to be listened in the frontend
})
})
 server.listen(3001,()=>{
    console.log("SERVER IS RUNNING")
 })




