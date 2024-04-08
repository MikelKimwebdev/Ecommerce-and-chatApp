import {useState} from 'react';
import { useContext } from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { FaEye,FaEyeSlash,FaLock } from "react-icons/fa";
import { AuthContext } from './context/AuthContext';
import './App.css';
// import { RegisterUser } from '../../Server/Controllers/userController';

const SignIn =()=>{
    //checking whether we can access user from the AuthContext
    // const {user}=useContext(AuthContext);
    const {registerInfo,updateRegisterInfo,registerUser,regError,isRegisterLoading,user}=useContext(AuthContext);
    const {LoginUser, LoginError,LoginInfo,isLoginLoading,UpdateLoginInfo}=useContext(AuthContext);
    const [visible,setVisibility]=useState(false);
    const handleVisibility=()=>{
        setVisibility(!visible);
    }
    const [visible2,setVisibility2]=useState(false);
    const handleVisibility2=()=>{
        setVisibility2(!visible2);
    }
    const [visible3,setVisibility3]=useState(false);
    const handleVisibility3=()=>{
        setVisibility3(!visible3);
    }
    
    const[action,setAction]=useState("SIGN UP")

    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     if (action === 'SIGN UP'){
    //         registerUser();
    //     } else{
    //         LoginUser();
    //     }
    // }
    return(
    <div className='SignIn'>
       <>
       <div className='sign-in-background'>
        <img src={'./images/images (13).jpeg'}  alt='sideimage' />
       </div>
       <div className='signIn-form'>
       
         <form onSubmit={action==='SIGN UP' ? registerUser : LoginUser}>
            <div className='form-header'>       
                <div className='form-title'><h2>{action}</h2>
                {/* <div>{user.name}</div> */}
                </div>
                <div className='underline'></div>
            </div>
            
            <div className='form-body'>
            {action==="SIGN IN"?<div></div>:
                <div className='user-names'>
                    <div className='first-name'>
                    <div className='FirstName-input'><p><AiOutlineUser /></p><input type='text' placeholder='Enter first name' onChange={(e) => updateRegisterInfo({...registerInfo, FirstName:e.target.value})}/></div>                    
                    </div>

                    <div className='Last-name'>
                    <div className='lastName-input'><p><AiOutlineUser /></p> <input type='text' placeholder='Enter last name' onChange={(e)=>updateRegisterInfo({...registerInfo,LastName:e.target.value})}/> </div>                   
                    </div>

                </div>
            }
            {action==="SIGN IN"?<div></div>:
                <div className='email'>
                    <div className='email-input'>
                    <p><MdOutlineEmail /></p> 
                    <input type='text' placeholder='Enter valid email' onChange={(e)=>updateRegisterInfo({...registerInfo,email:e.target.value})}/>
                    </div>
                </div>
            }
            {action==="SIGN UP"?<div></div>:
                <div className='email'>
                    <div className='email-input'>
                    <p><MdOutlineEmail /></p> 
                    <input type='text' placeholder='Enter valid email' onChange={(e)=>UpdateLoginInfo({...LoginInfo,email:e.target.value})}/>
                    </div>
                </div>
            }
            {action==="SIGN IN"?<div></div>:
                <div className='password'>               
                    <div className='new-pass'>
                    <span><FaLock /></span><input type={visible? "text":"password"} placeholder='Enter new password' onChange={(e)=>updateRegisterInfo({...registerInfo,newPassword:e.target.value})}/><p onClick={handleVisibility}>{visible? <FaEye />:<FaEyeSlash />}</p>
                    </div>
                </div>
                }
                {action==="SIGN IN"?<div></div>:
                <div className='password'>               
                    <div className='confirm-pass'>
                    <span><FaLock /></span><input type={visible2? "text":"password"}  placeholder='Confirm password' onChange={(e)=>updateRegisterInfo({...registerInfo,confirmPassword:e.target.value})}/><p onClick={handleVisibility2}>{visible2?<FaEye />:<FaEyeSlash />}</p>
                    </div>
                </div>
                }
            </div>
                {action==="SIGN UP" ?<div></div>:
                <div className='signIn-password'>
                    <div className='confirm-pass'>
                    <span><FaLock /></span><input type={visible3? "text":"password"}  placeholder='Enter password' onChange={(e)=>UpdateLoginInfo({...LoginInfo,password:e.target.value})}/><p onClick={handleVisibility3}>{visible3?<FaEye />:<FaEyeSlash />}</p>
                    </div>
                </div>
            }
            {action==="SIGN IN"?
            <div>
       
                <span>Forgot password? <a href='/'>Click me!</a></span>
            </div>:
            <div></div>}
        
           <div className='sign-btn'>
           <div className='register-btn'>
            <button  className={action==="SIGN IN"? "submit gray":"submit"} type='submit' onClick={()=>{setAction("SIGN UP")}}>{isRegisterLoading ? "Creating...." : "SIGN UP"}</button>
            </div>
           <div className='login-btn'>
            <button className={action==="SIGN UP"? "submit gray":"submit"} type="submit" onClick={()=>{setAction("SIGN IN")}}>{isLoginLoading ? "Logging..":"SIGN IN"}</button>
            </div>
           </div>
           {
            action==="SIGN UP" &&
            <div className='RegError'>
           {
                regError?.error && <alert variant="danger">
                    <p>{regError?.message}</p>
                </alert>
            }
           </div>
           }
           {
            action === "SIGN IN" && <div className='RegError'>
                {
                    LoginError?.error && <alert variant='danger'>
                        <p>{LoginError?.message}</p>
                    </alert>
                }
            </div>
           }
           <p>Logged in  as {user?.FirstName}</p>
         </form>
         </div>
         </>
         </div>
    )
}
export default SignIn;