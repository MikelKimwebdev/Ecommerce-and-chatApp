const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName:{type:String,required:true},
    productCategory:{type:String,required:true},
    productActualPrice:{type: Number,required:true},
    productDiscountPrice:{type: Number,required:true},
    productDescription:{type: String,required:true},
    productImage:{type: Object,required:true}
    
},{
    timestamps:true
})

const productModel = mongoose.model("Product",ProductSchema);

module.exports = productModel;