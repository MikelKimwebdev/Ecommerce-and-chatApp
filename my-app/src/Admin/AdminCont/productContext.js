import { createContext,useCallback,useContext,useEffect,useState } from "react";
import { baseUrl,getRequest,postRequest } from "../../Services/service";
import { AuthContext } from "../../context/AuthContext";

export const productContext=createContext();

export const ProductContextProvider=({children})=>{
    const{user}=useContext(AuthContext)
    const [productLoading,setProductLoading]=useState(false);
    const [productError,setProductError]=useState(null);
    const[displayProducts,setDisplayProducts]=useState([])
    const[displayLoading,setDisplayLoading]=useState(false);
    const[displayError,setDisplayError]=useState(null)
    console.log(displayProducts);
    const [ProductInfo,setProductInfo]=useState({
        productImage:"",
        productName:"",
        productCategory:"",
        productActualPrice:"",
        productDiscountPrice:"",
        productDescription:""
    })
    console.log("ProductInfo",ProductInfo)
    // const [productImg,setProductImg] =useState("");
//   console.log(productImg)//it is in string format now
  const handleUpload =(e)=>{
    const file =e.target.files[0]
    console.log(file)//it will be an object
    TransformFile(file,ProductInfo)
  }
  //transform file into base 64 file
    const TransformFile =(file,currentInfo)=>{
      //we use class in js called FileReader which gets a url/string of the file instead of object
      const reader = new FileReader()
      if(file){
        reader.readAsDataURL(file);
        reader.onloadend=()=>{
          const updatedInfo ={
            ...currentInfo,
            productImage:reader.result
          }
          setProductInfo(updatedInfo)
        }
      }else{
        //if no file set the productImg to default
    const updatedInfo ={
        ...currentInfo,
        productImage:""
    } 
    setProductInfo(updatedInfo)
    }
    }

    const UploadProduct=useCallback(async(e)=>{
        try{
            e.preventDefault();
            setProductError(null)
            setProductLoading(true);
            const response =await postRequest(`${baseUrl}/product`,JSON.stringify(ProductInfo))
            setProductLoading(false);
            if(response.error){
                return setProductError(response);
            }
        }catch(error){
           console.log(error) 
        }
    },[ProductInfo])

    useEffect(()=>{
        const DisplayProduct=async()=>{
            setDisplayLoading(true)
            setDisplayError(null);
            const response=await getRequest(`${baseUrl}/product/AllProducts`)
            setDisplayLoading(false)
            if(response.error){
                return setDisplayError(response);
            }
            setDisplayProducts(response)
        }
        DisplayProduct();
    },[user])

return(
    <productContext.Provider
    value={
        {
            ProductInfo,
            setProductInfo,
            handleUpload,
            UploadProduct,
            displayProducts
        }
    }>
        {children}
    </productContext.Provider>
)
}