
import { useState,useEffect } from 'react';
import { AiFillHome, AiFillInfoCircle, AiTwotoneThunderbolt, AiOutlineDown, AiFillPhone, AiOutlineMessage} from "react-icons/ai";
import {Link} from 'react-router-dom';
import Sidebar from './sidebar'
import SignIn from './signIn';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Notification from './chats/Notification';
import './App.css'
const Nav = () => {
  const{user,logOutUser}=useContext(AuthContext)
  const [signIn,setSignIn]=useState(false)
  const ToggleSignIn=()=>{
    setSignIn(!signIn);
  }
  useEffect(()=>{
      setSignIn(false);
  },[user])  //toggle nav-collection
  const [SidebarOpen,setSidebarOpen]=useState(false);
   const ToggleSidebar=()=>{
    setSidebarOpen(!SidebarOpen)
   }
   const handleBodyClick=(event)=>{
    const IsOutsideClick=!event.target.closest(".toggle")
    if(IsOutsideClick){
      setSidebarOpen(false);
    }
   }
   useEffect(()=>{
    document.body.addEventListener("click",handleBodyClick);
    return()=>{
      document.body.removeEventListener("click",handleBodyClick);
    }
   },[]);
 const[navDrop,setNavDrop]=useState(false)
 const ToggleNav=()=>{
  setNavDrop(!navDrop)
 }
const handleAnyClick=(event)=>{
  const IsOutsideComponent=!event.target.closest(".navbar")
  if (IsOutsideComponent){
    setNavDrop(false);
  }
};
useEffect(()=>{
document.body.addEventListener("click",handleAnyClick);
return()=>{
  document.body.removeEventListener("click",handleAnyClick);
}},[]);

  return (
    <>
    <div className='navbar'>
    <div className='title'><img src={'/images/images (14).jpeg'} alt='mk-logo'/><p>MK Wears</p></div>
      <div className='nav-items'>
        <ul>
          <li><Link to='/'><div className='nav-icon'><AiFillHome/></div>Home</Link></li>
          <li><Link to='/about'><div className='nav-icon'><AiFillInfoCircle/></div> About Us</Link></li>
          <li><a href='/'><div className='nav-icon'><AiTwotoneThunderbolt/></div> Hot Deals</a></li>
          <li onClick={ToggleNav}><div className={`nav-icon ${navDrop? 'active':''}`}><AiOutlineDown/></div> Categories</li>
          <li><Link to='/contact'><div className='nav-icon'><AiFillPhone/></div> Contact </Link></li>
          <li><a href='/chats'><div className='nav-icon'><AiOutlineMessage/></div> Chats</a></li>
        </ul>
        <div className='notify-component'>
        <Notification />
        </div>
        <div className='RegLog'>
        { user ? (<button type='submit' onClick={logOutUser}>Logout</button>):
        (<div className='RegisterBtn'>
          <button type='submit' onClick={ToggleSignIn}>Register</button>
        </div>)
        }
        <div className={`toggle ${SidebarOpen ?'active':''}`} onClick={ToggleSidebar}></div>
      </div>
</div>
    </div>
    {navDrop &&(
          <div className='nav-category'>
             <ul>
              <li><a href='/'>Official collection</a></li>
              <li><a href='/'>Casual collection</a></li>
              <li><a href='/'>Sports collection</a></li>
              <li><a href='/'>Designer collection</a></li>
              <li><a href='/'>All collection</a></li>
             </ul>
          </div>
          )
          }
          {SidebarOpen &&
  (
      <div className='sidebar-area'>
      <Sidebar className={SidebarOpen ? 'active':''}/>
      </div>
  )
  } 
  {signIn &&
  <div className='signIn-Area'>
  <SignIn/>
  </div>
  }
    </>
  )
}

export default Nav;
