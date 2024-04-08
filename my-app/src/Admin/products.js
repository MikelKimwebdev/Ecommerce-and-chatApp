import React,{useContext} from 'react'
import { productContext } from './AdminCont/productContext';

const Products = () => {
 const {ProductInfo,setProductInfo,handleUpload,UploadProduct} = useContext(productContext);
 const UpdateProductInfo=(info)=>{
  setProductInfo(info);
 }
  return (
    <div className='Update-products'>
      <form onSubmit={UploadProduct}>
        <h3>PRODUCTS UPDATE</h3>
        <div className='product-image'>
        <label>product image</label>
            <input type='file' accept='image/' onChange={handleUpload}/>
        </div>
        <div className='Product-review'>
          {
            ProductInfo.productImage ? <>
            <img src={ProductInfo.productImage} alt='product img'/>

            </>:<p>Image preview</p>
          }
        </div>
        <div className='product-name'>
        <label>product Name</label>
        <input type='object' placeholder='Enter Products name' onChange={(e)=>UpdateProductInfo({...ProductInfo,productName:e.target.value})}/>
        </div>
        <div className='product-category'>
        <label>product category</label>
            <select required onChange={(e)=>UpdateProductInfo({...ProductInfo,productCategory:e.target.value})}>
                <option value="Official collection">Official collection</option>
                <option value="Casual collection">Casual collection</option>
                <option value="Sports collection">Sports collection</option>
                <option value="Designer collection">Designer collection</option>
                <option value="All collection">All collection</option>
            </select>
        </div>
        <div className='actual-Price'>
        <p>ksh</p>
        <label>Actual Price</label>
        <input type='number' placeholder='Enter actual price' onChange={(e)=>UpdateProductInfo({...ProductInfo,productActualPrice:e.target.value})}/>
        </div>
        <div className='discount-Price'>
        <label>discount Price</label>
        <p>ksh</p>
        <input type='number' placeholder='Enter discount Price' onChange={(e)=>UpdateProductInfo({...ProductInfo,productDiscountPrice:e.target.value})}/>
        </div>
        <div className='product-description'>
            <textarea type='text' placeholder='Enter Product description...' onChange={(e)=>UpdateProductInfo({...ProductInfo,productDescription:e.target.value})}/>
        </div>
        <div className='Product-submit'>
        <button type='submit'>
          Create New Product
        </button>

        </div>
      </form>
    </div>
  )
}

export default Products;
