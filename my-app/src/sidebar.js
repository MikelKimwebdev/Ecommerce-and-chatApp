import React from 'react'
import { BsCart4,BsChatLeftText,BsCheckCircleFill,BsClock ,BsGraphUp  } from "react-icons/bs";
import './App.css'
import {Link} from 'react-router-dom';
const sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='up-sidebar'>
        <ul>
            <li><a href='/'>Cart <BsCart4/></a></li>
            <li><a href='/'>Recent Purchase <BsGraphUp /></a></li>
            <li><a href='/'>Offer Deals <BsClock/></a></li>
            <li><a href='/'>Delivery Approval <BsCheckCircleFill/></a></li>
            <li><a href='/'>Comments <BsChatLeftText/></a></li>
        </ul>
      </div>
      <div className='admin-btn'>
      <button><Link to='/adminLog'>Admin</Link></button>
      </div>
    </div>
  )
}

export default sidebar
