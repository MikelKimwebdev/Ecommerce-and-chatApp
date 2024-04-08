const { Server } = require("socket.io");

const io = new Server({ cors:"http://localhost:3000"});
//online users

let onlineUsers= [];

io.on("connection", (socket) => {
    console.log("new connection",socket.id);

    // listen to a connection
    socket.on("addNewUser",(userId)=>{
        //here we are pushing online user to the array with socket.id to keep track of it
        //we want to push only when users does not exist in the onlineUsers so we negate onlineUsers
        !onlineUsers.some(user => user.userId === userId) &&
        onlineUsers.push({
            userId,
            socketId:socket.id,
        })
        console.log("onlineUsers",onlineUsers)
        //we are emitting to frontend
        io.emit("getOnlineUsers",onlineUsers)
    })
    //add new message
    socket.on("sendMessage",(message)=>{
        const user = onlineUsers.find(user=> user.userId === message.recipientId)

        if(user){
           io.to(user.socketId).emit("getMessage",message)
           io.to(user.socketId).emit("getNotification",{
            senderId: message.senderId,
            isRead:false,
            date:new Date(),
           })
        }
    })
  socket.on("disconnect",() =>{
    onlineUsers = onlineUsers.filter(user=> user.socketId !==socket.id)
    io.emit("getOnlineUsers",onlineUsers)
  })
});

io.listen(3001);