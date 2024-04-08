const mongoose= require('mongoose');

/*we use new since we are using class mongoose to create an object that is userSchema*/
const userSchema = new mongoose.Schema(
    {
        FirstName:{type:String,required:true,minlength:3,maxLength:30},
        LastName:{type:String,required:true,minlength:3,maxLength:30},
        email:{type:String,required:true,minlength:3,maxLength:200,unique:true},
        newPassword:{type:String,required:true,minlength:3,maxLength:200,unique:true},
        confirmPassword:{type:String,required:true,minlength:3,maxLength:200,unique:true}

    },{   
        timestamps:true,
     }
)
/*setting for every user*/
const userModel=mongoose.model('User',userSchema);

module.exports=userModel//exporting our file and saving it as UserModel