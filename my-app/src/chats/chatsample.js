import { useContext } from "react"
import {useFetchRecipientUser} from "../Hooks/useFetchRecipient"
import { ChatContext } from "../context/chatContext"
import '../App.css'
import { unreadNotificationFunc } from "../Services/unreadNotification"
import { useFetchLatestMessage } from "../Hooks/UseFetchMessage"
import moment from "moment"
// create a sample component
const UserChat=({chat,user})=>{
    const {recipientUser} = useFetchRecipientUser(chat ,user);
    const {latestMessage}=useFetchLatestMessage(chat)
    // console.log("recipientUser",recipientUser)
    // return <>UserChat</>
    const{onlineUsers,notification,MarkThisUserNotification}=useContext(ChatContext);
//adding notification to  every user so that we get the number of unread messages in each user
    const unreadNotifications = unreadNotificationFunc(notification);
    const thisUserNotifications=unreadNotifications?.filter(
        n => n.senderId == recipientUser?._id
    )
    const isOnline =onlineUsers?.some((user)=>user.userId === recipientUser?._id)
    if (!recipientUser) {
        return <div>Loading...</div>;
    }
    //we need to truncate the message with give width
    const truncateText= (text)=>{
        //we need twenty characters
        let shortText =text.substring(0,20);

        if(text.length >20){
            shortText =shortText + "...";
        }
        return shortText;
    }
    return <div className="user-chatBox" onClick={()=>{
        if(thisUserNotifications?.length !==0){
            MarkThisUserNotification(thisUserNotifications,notification)
        }
    }}>
        <div className="Upper">
        <div className={isOnline ? "online-user" : ""}>

            </div>
            <div className='sender-img'>
            <img src={"./images/categories/download.jpeg"} alt='user'/>
            </div>
            <div className="Recipient-user">
                <div>{recipientUser.FirstName}</div>
                <div>{recipientUser.LastName}</div>
            </div>
            <div className='chatBox-date'>
                {moment(latestMessage?.createdAt).calendar()}
            </div>
        </div>
        <div className='lower'>
        <div className="sender-text">
                {
                    latestMessage?.text &&(
                        <span>{truncateText(latestMessage?.text)}</span>
                    )
                }
            </div>
        
        <div className={thisUserNotifications?.length > 0 ? 'unread-texts' : ""}>
            {thisUserNotifications?.length> 0 ? thisUserNotifications.length: ""}
        </div>
        </div>
    </div>
}
export default UserChat;
