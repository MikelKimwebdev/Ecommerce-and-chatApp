import React from 'react';
import {AiOutlineArrowRight} from "react-icons/ai";
import './App.css'
const Register = () => {
    return (
      <div>
      <form className='Register'>
      <div className='logo'><img src={'/images/images (14).jpeg'} alt='logo'/></div>
         <div className='register-form'>
         <header>
          <div className='register'><label>Register</label></div>
          </header>
          <body>
          <div className='email'>
           <div className='email-label'><label>Email</label></div>
            <div className='email-input'><input type='text' placeholder='enter email'/></div>
          </div>
          <div className='Password'>
           <div className='password-label'><label>Password</label></div>
            <div className='password-input'><input type='text' placeholder='enter password'/></div>
            <div className='confirm-password'><input type='text' placeholder='confirm password'/></div>
          </div>
          <div className='register-btn'><button type='submit'>Register<div className='register-icon'><AiOutlineArrowRight/></div></button></div>
          <div className='or'>
          </div>
          <div className='Google-option'><button><img src={'/images/270014.png'} alt='google-icon'/>Continue with Google</button></div>
          <div><p>Already have an account? <a href='/'>Login</a></p></div>
          </body>
         </div> 
      </form>
      </div>
    )
}
export default Register;