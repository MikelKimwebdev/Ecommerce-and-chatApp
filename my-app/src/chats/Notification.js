import {useState,useContext} from 'react';
import { SiGooglemessages } from "react-icons/si";
import { ChatContext } from '../context/chatContext';
import { AuthContext } from '../context/AuthContext';
import { unreadNotificationFunc } from '../Services/unreadNotification';
import moment from 'moment';

const Notification = () => {
    const [notify,setNotify]=useState(false);
    const{user}=useContext(AuthContext);
    const{notification,userChats,allUsers,markAllNotificationsAsRead,markNotificationAsRead}=useContext(ChatContext);
    // console.log("allUsers",allUsers)

    const UnreadNotifications=unreadNotificationFunc(notification);
    //we want to add the name of the sender
    const modifiedNotifications=notification.map((n)=>{
        const sender = allUsers.find(user => user._id === n.senderId);
        return(
          {  ...n,
            senderName:sender?.FirstName
        }
        )
    })
    console.log("unread",UnreadNotifications);
    console.log("modified notification:",modifiedNotifications)
    return (
    <>
         <div className="notifications">
        <div className="notification-icon" onClick={()=>setNotify(!notify)}>
        <SiGooglemessages />
        {
            UnreadNotifications?.length === 0 ? null:(
                <span>{UnreadNotifications?.length}</span>
            )
        }
        </div>
        {notify &&
            <div className="notification-box" >
            <div className='notification-top'>
            <div className="notifications-header">
                <h3>Notification</h3>
                </div>
                <div className="mark-as-read" onClick={()=>markAllNotificationsAsRead(notification)}>Mark all as Read</div>
                {
                    modifiedNotifications?.length===0? 
                    <span className='notify'>
                        No notification..
                    </span>: null
                }
                </div>
                <div className='notification-bottom'>
                {
                    modifiedNotifications && modifiedNotifications.map((n,index)=>{
                        return <div className={n.isRead ? "notify" : "notification not-read"} key={index} onClick={()=>{markNotificationAsRead(n,userChats,user,notification)
                        setNotify(false)}}>
                        <div>
                        <div><span>{`${n.senderName} sent you a new message`}</span></div>
                        <div><span className='notification-time'>{moment(n.date).calendar()}</span></div>
                            
              </div>
                        </div>
                    })
                }
                </div>
        </div>}
    </div>
    </>
     );
}
 
export default Notification;