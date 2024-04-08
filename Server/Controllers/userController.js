
const userModel = require('../Models/useModel');
const bcrypt = require('bcrypt');
// const { response } = require('express');
const jwt = require('jsonwebtoken');
const validator = require('validator');


// we have created our token
const createToken =(_id)=>{
    const jwtKey=process.env.JWT_SECRET_KEY;
    return jwt.sign({_id},jwtKey,{expiresIn:"3d"})
}
const RegisterUser = async(req, res) => {
    try{
        console.log("Request Body:", req.body);
    const{FirstName,LastName,email,newPassword,confirmPassword}= req.body

//  if the user email already exists then we send the message to client we used findone to check the email
    let user = await userModel.findOne({email});
//if user already exists then we set status to 400 meaning there is error then use .json or .send
    if(user) return res.status(400).json("user with email exists")

    if(!FirstName ||!LastName || !email || !newPassword || !confirmPassword) 
    return res.status(400).json("all fields required")

    if(!validator.isEmail(email))
    return res.status(400).json("email must be a valid email");
    if(!validator.isStrongPassword(newPassword))
     return res.status(400).json("the password is not strong");
     if (newPassword !== confirmPassword) {
        return res.status(400).json("Passwords do not match");
    }
    //  we need all this to be in the dbs
    user = new userModel({FirstName,LastName,email,newPassword,confirmPassword});
    console.log(user);

    // we are creating this to secure pass
    // we are using gensalt a function that ushers a specific amount of characters 
    const salt = await bcrypt.genSalt(10);

    user.newPassword=await bcrypt.hash(user.newPassword,salt)
    user.confirmPassword=await bcrypt.hash(user.confirmPassword,salt)
    
    //save user in dbs after we usher password
    await user.save()

    const token=createToken(user._id)

    res.status(200).json({_id:user._id,FirstName,LastName,email,token})
    } catch (error) {
        console.log("Error during registration:", error);
        res.status(500).json({ error: "Internal Server Error. Please try again later." });
};
}
const LoginUser=async(req,res)=>{
    const {email,password}=req.body;
 try{
     let user= await userModel.findOne({email})
     if(!user) return res.status(400).json("user does not exist");

     //we want to compare the password entered with the password that already exist
     const isValidPassword= await bcrypt.compare(password,user.newPassword);
     if(!isValidPassword) return res.status(400).json("password does not match");

     //create a token for the user login index

     const token = createToken(user._id);

     res.status(200).json({_id:user._id,name: user.FirstName,email,token})
 } catch(error){
    console.log("error in login :",error)
 };
}

const findUser=async(req,res)=>{
    //passing id to the parameter userId
    const userId= req.params.userId;

    try{
        const user = await userModel.findById(userId);
        // send the user to client or frontend

        res.status(200).json(user);

    }catch (error) {
        console.log("find user error",error)
    res.status(500).json(error)}
}

const findAllUsers=async(req,res)=>{ 

try{
    const users= await userModel.find();
    res.status(200).json(users);
}
catch (error) {
    res.status(500).json(error);
}
}
module.exports = {
    RegisterUser,
    LoginUser,
    findUser,
    findAllUsers
};
