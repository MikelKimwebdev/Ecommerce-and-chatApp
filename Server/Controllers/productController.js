const cloudinary=require( '../Cloudinary/cloudinary');
const productModel  = require('../Models/productModel');

const AddProducts=async(req,res)=>{
 const{productName,productCategory,productActualPrice,productDiscountPrice,productDescription,productImage}=req.body
 try{
if(productImage){
    const uploadRes=await cloudinary.uploader.upload(productImage,{

        upload_preset:"mk_wears"
    })
    if(uploadRes){
        const product = new productModel({
            productName,
            productCategory,
            productActualPrice,
            productDiscountPrice,
            productDescription,
            productImage:uploadRes
        })
        const savedProduct = await product.save();
        return res.status(200).json(savedProduct);
    }
}

 }catch(error){
    console.log(error)
    return res.status(500).json(error);
 }
}

const getProduct=async(req,res)=>{
    try{
        const products= await productModel.find();
        return res.status(200).json(products);

    }catch(error){
        return res.status(500).json(error); 
    }

}

module.exports = {AddProducts,getProduct}