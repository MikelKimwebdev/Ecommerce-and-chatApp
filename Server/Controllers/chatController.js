const chatModel = require('../Models/chatModel');
//createchat api
//getUserChat api
//findchat api

const createChat=async(req,res)=>{
    const{firstId,secondId}=req.body;
    try{
        const chat=await chatModel.findOne({
            //we are checking if members have two of the ids using mongo db operator called all
            members:{
                $all:[firstId,secondId]
            }
        })
        //if the chat already exist we send the chat which exist
        if(chat)return res.status(200).json(chat)
        // else if no chat exist
        const newChat=new chatModel({
            //what our new chart should contain
            // an array of the two ids
            members:[firstId,secondId]
        })
        const response=await newChat.save();
        res.status(200).json(response);

    }catch(error){
        console.log(error);
        //send the error to frontend
        res.status(500).json(error);
    }
};
const FindUserChat=async(req,res)=>{
    const userId=req.params.userId;
    try{
       const chats=await chatModel.find({
            members:{$in :[userId]}
       }) 
       res.status(200).json(chats)

    }catch(error){
        return res.status(500).json(error)
    }
}

const findChat=async(req,res)=>{
    const {firstId,secondId}=req.params;
    try{
        const chat=await chatModel.findOne({
            members:{$all :[firstId,secondId]}
        });
        res.status(200).json(chat)
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}
module.exports ={
    createChat,
    FindUserChat,
    findChat,
}
