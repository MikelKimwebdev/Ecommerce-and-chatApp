import React, { useContext } from 'react'
import { productContext } from './Admin/AdminCont/productContext';
import { IoStar } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa"
import Nav from './nav'
import Footer from './footer'

const AllProducts = () => {
    const {displayProducts} = useContext(productContext);
    console.log(displayProducts);
  return (
    <>
    <Nav/>
    <div className='AllProducts-body'>
         {displayProducts &&
             displayProducts.map((Product,index)=>
    <div key={Product._id} className='AllProducts-items'>
    <div className='AllProducts-Name'>
        {Product.productName}
      </div>
      <div className='AllProducts-img'>
        <img src={Product.productImage.secure_url} alt={displayProducts.productName}/>
      </div>
      <div className='AllProducts-Category'>
        {Product.productCategory}
      </div>
      <div className='AllProducts-Description'>
        {Product.productDescription}
      </div>
      <div className='AllProducts-rating'>
      <ul>
        <li><IoStar /></li>
        <li><IoStar /></li>
        <li><IoStar /></li>
        <li><IoStar /></li>
        <li><IoStar /></li>
      </ul>
      </div>
      <div className='AllProducts-Price'>
      <div className='AllProducts-DiscountPrice'>
        ksh {Product.productDiscountPrice}
      </div>
      <div className='AllProducts-ActualPrice'>
        ksh {Product.productActualPrice}
      </div>
      </div>
     <div className='AllProducts-btn'>
        <button><FaCartArrowDown /> Add To Cart</button>
     </div>
    </div>)}
    </div>
    <Footer/>
    </>
   
  )
}

export default AllProducts
