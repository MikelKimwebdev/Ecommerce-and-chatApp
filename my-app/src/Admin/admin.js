import {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import '.././App.css'
import Footer from '../footer'
import { FaImages } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiFaceMeh } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import Products from './products';
import { ChatContext } from '.././context/chatContext';
import { productContext } from './AdminCont/productContext';
import InputEmoji from "react-input-emoji";
const Admin = () => {
    const{allUsers} = useContext(ChatContext);
    const{displayProducts} = useContext(productContext)
    console.log(allUsers);
    const[isproductFormOpen,setproductFormOpen]=useState(false);
    const ToggleProductForm =()=>{
        setproductFormOpen(!isproductFormOpen);
    }
    const [textMessage, setTextMessage] = useState("");
    function handleOnEnter(textMessage) {
        console.log("Text", textMessage);
      }
 return(
        <>
    <div className='admin-page'>
    <div className='admin-nav'>
       <nav>
       <div className='title'>
       <img src={'/images/images (14).jpeg'} alt='mk-logo'/>
       <p>MK Wears</p></div>
       <div className='Admin-ul'>
        <ul>
            <li><Link to='/adminHome'>Home</Link></li>
            <li><a href='/'>Chats</a></li>
            <li onClick={ToggleProductForm}>Products</li>
            <li><a href='/'>Sales Records</a></li>
            <li><a href='/'>Settings</a></li>
        </ul>
        </div>
       </nav>
       </div>
       {isproductFormOpen &&
        <div className='Products-update'>
            <Products/>
       </div>}
       <div className='First-Row'>
                    <div>
                    <h4>TOTAL CUSTOMERS</h4>
                    <p>This month</p>
                    {allUsers &&
                        <span>{allUsers.length}</span>
                        }
                </div>
                <div>
                    <h4>TOTAL PRODUCTS</h4>
                    <p>This month</p>
                    <span>{displayProducts.length}</span>
                    
                </div>
                <div>
                    <h4>NEW REQUEST & ORDER</h4>
                    <p>This month</p>
                    <span>143</span>
                   
                </div>
                <div>
                    <h4>SOLD ITEMS</h4>
                    <p>This month</p>
                    <span>104</span>
                   
                </div>
         </div>
         <div className='Recent'>
         <div className='Recent-chats'>
            <h4>Recent chats</h4>
            <div className='admin-sendbox'>
             <div className='admin-sendimg'>
                <FaImages />
                </div>
                <div className='admin-dots'>
                    <BsThreeDotsVertical/>
                </div>
                <div className='admin-sendInput'>
                <InputEmoji
      value={textMessage}
      onChange={setTextMessage}
      cleanOnEnter
      onEnter={handleOnEnter}
      placeholder="Type a message"
    />
                </div>
                <div className='admin-sendbtn'>
                <IoSend />
                </div>
             </div>


         </div>
         <div className='Recent-activity'>
         <h4>Recent Activity</h4>

         </div>
         </div>
         <div>
            <Footer/>
         </div>
       </div>
    </>
    )
}
export default Admin;