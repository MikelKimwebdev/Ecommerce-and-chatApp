
const mongoose = require('mongoose');

const chatSchema= new mongoose.Schema({
    members:Array,
},{
    timestamps:true,
})

//set userModel
const chatModel=mongoose.model('chat',chatSchema);

module.exports=chatModel;