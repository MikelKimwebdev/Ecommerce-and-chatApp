import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai";
import './App.css'
const login = () => {
  return (
    <div>
    <form className='Login'>
    <div className='logo'><img src={'/images/images (14).jpeg'} alt='logo'/></div>
       <div className='login-form'>
       <header>
        <div className='login'><label>LOGIN</label></div>
        </header>
        <body>
        <div className='email'>
         <div className='email-label'><label>Email</label></div>
          <div className='email-input'><input type='text' placeholder='enter email'/></div>
        </div>
        <div className='Password'>
         <div className='password-label'><label>Password</label></div>
          <div className='password-input'><input type='text' placeholder='enter password'/></div>
        </div>
        <div className='login-btn'><button type='submit'>Login<div className='Login-icon'><AiOutlineArrowRight/></div></button></div>
        <div><p><a href='/'>Forgot password</a></p></div>
        <div className='or'>
        </div>
        <div className='Google-option'><button><img src={'/images/270014.png'} alt='google-icon'/>Login in with Google</button></div>
        <div><p>Don't have an account? <a href='/'>Register</a></p></div>
        </body>
       </div> 
    </form>
    </div>
  )
}

export default login;
