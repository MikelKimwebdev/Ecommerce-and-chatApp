import React, { useContext } from 'react';
import {useState} from 'react';
import { IoMdLock } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import { AdminContext } from './AdminCont/AdminContext';

const AdminLog=()=>{
    const {Admin,AdminRegisterInfo,UpdateRegisterInfo,AdminRegError,AdminLoading,registerAdmin,AdminLogInfo,AdminLogError,AdminLogLoading,UpdateLogInfo,LoginAdmin}=useContext(AdminContext);
    const [action,setAction]=useState('SIGN UP')
    // const handleSignInClick = (e) => {
    //     e.preventDefault(); 
    //     setAction('SIGN IN');
    // };

    // const handleSignUpClick = (e) => {
    //     e.preventDefault(); 
    //     setAction('SIGN UP');
    // };

    return(  
        <>
          <div className='AdminLog'>
          <div className='AdminForm'>
        <form onSubmit={action === 'SIGN UP'? registerAdmin : LoginAdmin}>
            <h2>
                ADMIN ONLY
            </h2>
            <h3>{action}</h3>

            <div>
            { action === "SIGN UP" &&
                <div className='security-key'><label>Security Key</label>
                <span><IoMdLock /></span><input type='text' placeholder='Enter security key' onChange={(A)=>UpdateRegisterInfo({...AdminRegisterInfo,SecurityKey:A.target.value})}/>
                </div>
                }
                { action === "SIGN IN" &&
                <div className='security-key'><label>Security Key</label>
                <span><IoMdLock /></span><input type='text' placeholder='Enter security key' onChange={(L)=>UpdateLogInfo({...AdminLogInfo,SecurityKey:L.target.value})}/>
                </div>
                }
                {action === "SIGN UP" &&
                    <div className='admin-email'><label>Email</label>
                    <span><MdOutlineMailOutline /></span><input type='text' placeholder='Enter email' onChange={(A)=>UpdateRegisterInfo({...AdminRegisterInfo,Email:A.target.value})}/>
                </div>}
                {action === "SIGN IN" &&
                    <div className='admin-email'><label>Email</label>
                <span><MdOutlineMailOutline /></span><input type='text' placeholder='Enter email' onChange={(L)=>UpdateLogInfo({...AdminLogInfo,Email:L.target.value})}/>
                </div>}
               {action === "SIGN UP" &&
                 <div className='admin-newpass'><label>New password</label>
                
                 <span> <FaKey /></span><input type='password' placeholder='create Password' onChange={(A)=>UpdateRegisterInfo({...AdminRegisterInfo,NewPassword:A.target.value})}/>
                </div>}
                {
                    action === "SIGN UP" &&
                <div className='admin-confirmpass'><label>Confirm password</label>
                <span> <FaKey /></span><input type='password' placeholder='confirm Password' onChange={(A)=>UpdateRegisterInfo({...AdminRegisterInfo,ConfirmPassWord:A.target.value})}/>
                </div>}
                {action === "SIGN IN" &&
                 <div className='admin-pass'><label>Password</label>
                 <span> <FaKey /></span><input type='password' placeholder='Enter Password' onChange={(L)=>UpdateLogInfo({...AdminLogInfo,Password:L.target.value})}/>
                </div>}
            </div>
            <div className='AdminLog-btns'>
            <div><button className= {action==='SIGN IN'? 'AdminLog-submit':'signOff'} type='submit' onClick={()=>{setAction('SIGN UP')}}>{AdminLoading ? "signing...":"SIGN UP"}</button></div>
            <div ><button className= {action==='SIGN UP'? 'AdminLog-submit':'signOff'} type='submit'  onClick={()=>{setAction('SIGN IN')}}>{AdminLogLoading ? "signing...":"SIGN IN"}</button></div>
            </div>
            {action==='SIGN UP' &&
                <div className='AdminRegErr'>
           {AdminRegError?.error &&
             <alert variant="danger">
                <p>{AdminRegError?.message}</p>
            </alert>}
            </div>}
            {action==='SIGN IN' &&
                <div className='AdminRegErr'>
           {AdminLogError?.error &&
             <alert variant="danger">
                <p>{AdminLogError?.message}</p>
            </alert>}
            </div>}
        </form>
        </div>
    </div>
    </>
        )
}

export default AdminLog;