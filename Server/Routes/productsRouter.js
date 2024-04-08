const express=require('express');
const {AddProducts,getProduct}=require('../Controllers/productController');

const router = express.Router();

router.post('/',AddProducts);
router.get('/AllProducts',getProduct)

module.exports = router;