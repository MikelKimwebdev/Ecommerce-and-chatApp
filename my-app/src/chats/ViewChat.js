import { useContext ,useState,useEffect,useRef} from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/chatContext";
import { useFetchRecipientUser } from "../Hooks/useFetchRecipient";
import InputEmoji from "react-input-emoji";
import { IoSend } from "react-icons/io5";
import { FaImages } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import moment from 'moment';

const  ViewChat =() => {
    const {user}=useContext(AuthContext)
    const {currentChat,messages,isMessagesLoading,sendMessage}=useContext(ChatContext);

    const {recipientUser}=useFetchRecipientUser(currentChat,user);
    const [textMessage, setTextMessage] = useState("");
    const scroll = useRef();

    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
if(!recipientUser) return(
    
    <p>No Conversation selected yet</p>
)

if(isMessagesLoading) return(
    
    <p>Loading.......</p>
)
function handleOnEnter(textMessage) {
  console.log("Text", textMessage);
}
    
return(
    <>
    <div>
    <div className="view-chat">
            {
                messages && messages.map((message,index)=>
                <div key='index' className={`${message?.senderId === user?._id ? "sender-right":"sender-left"}`} ref = {scroll}>
                <div className="view-header">
                    <strong>{recipientUser?.FirstName}</strong>
                        </div>
                <div className='view-chat-message'>{message.text}</div>
                  <div>{moment(message.createdAt).calendar()}</div>
                </div>
                   
                )
            }
            </div>
        <div className='all-send'>
      <div className='send-box'>
      <div className='send-img'>
      <FaImages />
      </div>
      <div className='dots'>
        <BsThreeDotsVertical/>
      </div>
      <div className='send-input'>
      <InputEmoji
      value={textMessage}
      onChange={setTextMessage}
      cleanOnEnter
      onEnter={handleOnEnter}
      placeholder="Type a message"
    />
      </div>
      <div className='send-btn' onClick={()=>sendMessage(textMessage,user,currentChat._id,setTextMessage)}>
      <IoSend />
      </div>
      </div>
      </div>
      </div>
      </>
    )
}  
export default ViewChat;