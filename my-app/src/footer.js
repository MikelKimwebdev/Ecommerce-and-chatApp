import React from 'react'
import './App.css'
const footer = () => {
  return (
    <div className='footer'>
      <div className='footer-items'>
        <div className='shop'>
        <label>SHOP</label>
        <div className='shop-items'>
        <ul>
            <li>Official wear</li>
            <li>Casual wear</li>
            <li>Sports wear</li>
        </ul>
        </div>
        
        </div>
        <div className='help'>
        <label>HELP</label>
        <div className='help-items'>
        <ul>
        <li><a href='/'>Contact Us</a></li>
        <li><a href='/'>FAQ</a></li>
        <li><a href='/'>Accessibility</a></li>
        </ul>
        </div>
        </div>
        <div className='signup-p'><p>Sign up to get upto 20% off your first order</p></div>
      </div>
      <div className='subscription'>
      <input type='text' placeholder='Enter email address'/>
        <button type='submit'>Subscribe</button>
      </div>
      <div className='end-1'>
         <div className='copyright'>
            <p>Copyright@Border2023</p>
         </div>
         <div className='TAS'>
            <p><a href='/'>Terms and service</a></p>
         </div>
         <div className='PP'>
            <p><a href='/'>Privacy policy</a></p>
         </div>
         <div className='DNSMI'>
            <p>Do not sell my information</p>
         </div>
      </div>
    </div>
  )
}

export default footer
