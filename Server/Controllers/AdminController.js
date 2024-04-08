const AdminModel = require ('../Models/AdminModel')
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');
const validator =require('validator');

const createToken = (_id) =>{
    const jwtKey = process.env.JWT_SECRET_KEY;
    return jwt.sign({_id},jwtKey,{expiresIn:'3d'});
}

const RegisterAdmin =async(req,res)=>{
    try{

        const{SecurityKey,Email,NewPassword,ConfirmPassWord}=req.body;
        let Admin = await AdminModel.findOne({Email});
        if(Admin) return res.status(400).json("Admin Already Exist please Sign In");
        if(!SecurityKey||!Email||!NewPassword||!ConfirmPassWord)
        return res.status(400).json("Please fill all the fields")
        if(!validator.isEmail(Email))
        return res.status(400).json("Enter a valid Email");
        if(!validator.isStrongPassword(NewPassword))
        return res.status(400).json("Please try a strong Password");
        if(NewPassword !== ConfirmPassWord)
        return res.status(400).json("Password do not match");

        //this what we are sending to our dbs
        Admin = new AdminModel({SecurityKey,Email,NewPassword,ConfirmPassWord});
        //lets secure our password to accomodate only

        const salt = await bcrypt.genSalt(10);

        Admin.NewPassword= await bcrypt.hash(Admin.NewPassword, salt);
        Admin.ConfirmPassWord= await bcrypt.hash(Admin.ConfirmPassWord, salt);

        await Admin.save();

        const token =createToken(Admin._id)

        res.status(200).json({_id:Admin._id,Email,token})
    }
    catch(error){
        console.log("Error in registration",error)
        res.status(500).json({error:"Internal Server Error.Please try again later"})
    }
}

const FindAdmin=async(req,res)=>{
    const AdminId = req.params.AdminId;
    try{
       const Admin =await AdminModel.findById(AdminId);
       res.status(200).json(Admin);

    }catch(error){
        console.log("Error in finding Admin",error);
        return res.status(500).json(error);
    }
}
const FindAllAdmins=async(req,res)=>{
    try{
        const AllAdmins = await AdminModel.find();
        res.status(200).json(AllAdmins);
    }catch(error){
        return res.status(500).json(error);
    }
}
//login section

const AdminLogin=async(req,res)=>{
    const{SecurityKey,Email,Password}=req.body;
    try{
        let Admin=await AdminModel.findOne({Email});
        if(!Admin)
        return res.status(400).json("Admin does not exist");

        if(SecurityKey !== Admin.SecurityKey) 
        {
            return res.status(400).json("Incorrect Security Key");
        }

        const isValidPassword=await bcrypt.compare(Password,Admin.NewPassword);
        if(!isValidPassword) return res.status(400).json("Incorrect Password")

        const token= createToken(Admin._id);
        return res.status(200).json({_id:Admin._id,Email,token})
    } catch(error){
        console.log(error)
        return res.status(200).json(error);
    }
}

module.exports={RegisterAdmin,FindAdmin,FindAllAdmins,AdminLogin};

