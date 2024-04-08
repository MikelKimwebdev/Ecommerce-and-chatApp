import { useContext } from "react";
import { ChatContext } from "../context/chatContext";
import { AuthContext } from '../context/AuthContext';
import "../App.css";

const PotentialChats=()=>{

    const {user}=useContext(AuthContext)
    const{potentialChats,createChat,onlineUsers}=useContext(ChatContext);
    console.log("potentialChats",potentialChats);
    return <>
    <p>online</p>
        <div className="all-users">
            {
                potentialChats && potentialChats.map((u,index)=>{
                    return(
                        <div className="single-user" key={index} onClick={()=>createChat(user._id,u._id)}>
                        <div className='online-status'>

                             </div>
                        <div className="single-user-name">{u.FirstName}</div>
                        <span className={onlineUsers?.some((user)=>user?.userId === u?._id)? "user-online": ""}></span>
                    </div>
                      
                    )
                })
            }
        </div>
    </>
}
export default PotentialChats;