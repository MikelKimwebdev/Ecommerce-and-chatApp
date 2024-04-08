const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema(
    {
        SecurityKey:{type:String,required:true,minlength:3,maxLength:10},
        Email:{type:String,required:true,minlength:3,maxLength:30,unique:true},
        NewPassword:{type:String,required:true,minlength:3,maxLength:100,unique:true},
        ConfirmPassWord:{type:String,required:true,minlength:3,maxLength:100,unique:true},
    },
    {timestamps:true}

)
const AdminModel = mongoose.model('Admin',AdminSchema)

module.exports= AdminModel