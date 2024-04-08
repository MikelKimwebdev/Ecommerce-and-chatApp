const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    chatId:String,//get all messages for a given chat
    senderId:String,//get who get the message and who sent it
    text:String//message
},{
    timestamps:true,
})

const messageModel = mongoose.model('message',MessageSchema);

module.exports = messageModel;
