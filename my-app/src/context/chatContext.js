import { createContext,useState,useEffect,useCallback} from "react";
import {baseUrl,getRequest,postRequest} from '../Services/service';
const { io } = require("socket.io-client");

export const ChatContext = createContext();

export const ChatContextProvider=({children,user})=>{
    const [userChats,setUserChats]=useState(null)
    const[isUserChatsLoading,setIsUserChatsLoading]=useState(false);
    const[userChatsError,setUserChatsError]=useState(null);
    const[potentialChats,setPotentialChats]=useState([]);
    const[currentChat,setCurrentChat]=useState(null);
    const[messages,setMessages]=useState(null);
    const[isMessageLoading,setMessageLoading]=useState(false);
    const[messageError,setMessageError]=useState(null);
    const[sendTextMessageError,setSendTextMessageError]=useState(null);
    const[newMessage,setNewMessage]=useState(null);
    const[socket,setSocket]=useState(null);
    const[onlineUsers,setOnlineUsers]=useState([]);
    const[notification,setNotification]=useState([]);
    const[allUsers,setAllUsers]=useState([]);
    console.log("allUsers",allUsers)
    // console.log("onlineusers",onlineUsers)
    // console.log("CurrentChat",currentChat)
    // console.log("newMessage",newMessage)
    // console.log("messages",messages)
    // console.log("notification",notification)
    useEffect(()=>{
        //our backend url
        const newSocket = io("http://localhost:3001");
        setSocket(newSocket);
        //return a cleanup incase you are logging in again
        return () =>{
            newSocket.disconnect()
        }
    },[user])
    //add online users
    useEffect(()=>{
        if(socket===null)return
        socket.emit("addNewUser",user?._id)
        //we listen to the events
        socket.on("getOnlineUsers",(res)=>{
            setOnlineUsers(res);
        })
        return () =>{
            socket.off("getOnlineUsers")
        }
    },[socket]);//whenever new connection which means new socket

    //send message
    useEffect(()=>{
        if(socket===null)return
        const recipientId = currentChat?.members.find((id)=>
        id !== user?._id
    );
        socket.emit("sendMessage",{...newMessage,recipientId})
    },[newMessage]);
    //receive message and notification
    useEffect(()=>{
        if(socket===null)return
        socket.on("getMessage", (res)=>{
            if(currentChat?._id !==res.chatId) return;
            setMessages((prev)=>[...prev,res])
        });
        socket.on("getNotification",(res)=>{
            const isChatOpen = currentChat?.members.some((id)=>id ===res.senderId)
            if(isChatOpen){
                setNotification(prev=>[{...res,isRead:true,...prev}])
            }else{
                setNotification(prev =>[res,...prev])
            }
        })
        return ()=>{
            socket.off("getMessage")
            socket.off("getNotification")
        }
    },[socket,currentChat]);
    
    useEffect(()=>{
        const getUsers = async()=>{
            const response =await getRequest(`${baseUrl}/users`)
            if (response.error){
                return console.log("Error...", response)
            }
            //get user at a time
            //we are getting array here
            const PChats= response.filter((u)=>{
                //giving conditions
                let isChatCreated = false;
                // the current user should not be added to the array
            if(user?._id === u._id) return false;

            if(userChats){
                //some method returns true or false
                // checking whether the id of user is included
               isChatCreated=userChats?.some((chat)=>{
                //if the chat [0] is true then it means we have chat with first member then check the second
                    return chat.members[0] === u._id ||chat.members[1] === u._id;
                })
            }
            //we negate the function since we want to create when the chat is not created
            return !isChatCreated;
            })
            setPotentialChats(PChats);
            setAllUsers(response)
        }
        getUsers();
    },[userChats]);
    
    useEffect(()=>{
        const getUserChats=async()=>{
            if(user?._id){
                setIsUserChatsLoading(true);
                setUserChatsError(null);
                const response =await getRequest(`${baseUrl}/chats/${user?._id}`)
                setIsUserChatsLoading(false);
                if(response.error){
                    return setUserChatsError(response);
                }
                setUserChats(response)
            }
        }
        getUserChats();

    },[user,notification]);
    useEffect(()=>{
        const getMessages=async()=>{
            setMessageLoading(true);
                setMessageError(null);
                const response =await getRequest(`${baseUrl}/messages/${currentChat?._id}`)
                setMessageLoading(false);
                if(response.error){
                    return setMessageError(response);
                }
                setMessages(response)
            }
        getMessages();

    },[currentChat]);

    const sendMessage = async(textMessage,sender,currentChatId,setTextMessage)=>{
        if(!textMessage) return console.log("Enter message...")
        
        const response=await postRequest(`${baseUrl}/messages`,
        JSON.stringify({
            chatId:currentChatId,
            senderId:sender._id,
            text:textMessage
        })
        )
        if (response.error){
            return setSendTextMessageError(response);
        }
        setNewMessage(response);
        //updating our array of messages
        setMessages((prev)=>[...prev,response])
        //we set textmessage to null
        setTextMessage("");
    };
    const UpdateCurrentChat=useCallback((chat)=>{
        setCurrentChat(chat);
    },[])
    const createChat = useCallback(async(firstId,secondId)=>{
        //make request to backend
        const response =await postRequest(
            `${baseUrl}/chats`,
            JSON.stringify({
                firstId,
                secondId
            })
        )
        if (response.error){
            return console.log("Error in creatingchat",response)
        }
        setUserChats((prev)=>[...prev,response])
    },[])
//when we click mark as read the length of the array dissappears and the notification
    const markAllNotificationsAsRead = useCallback((notification)=>{
        const mNotifications = notification.map((n)=>{
            return{...n,isRead:true}
        })
        setNotification(mNotifications)
    },[]);
//when we want to open message when we click notification
    const markNotificationAsRead =useCallback((n,userChats,user,notification)=>{
        //find chat to open

        //we are go through userchats to get a chat
        const desiredChat =userChats.find(chat =>{
            //we know our chat members has two ids
            const chatMembers=[user._id,n.senderId]
            // perfom a check in every member
            const isDesiredChat =chat?.members.every((member) =>
            {
                // we use include to check if the member is in our chat member if true retur
                return chatMembers.includes(member);
            }
            )
            return isDesiredChat;
        })
        //mark now notification as read
        const mNotification =notification.map(el =>{
            if(n.senderId === el.senderId){
                return {...notification,isRead:true}
            }else {
                return el
            }
        })
        UpdateCurrentChat(desiredChat);
        setNotification(mNotification);
    },[])

    const MarkThisUserNotification =useCallback((thisUserNotifications,notification) =>{
        // mark notifications as read
        const mNotifications = notification.map(el =>{
            let notification;

            thisUserNotifications.forEach(n=>{
                if(n.senderId === el.senderId){
                    notification ={...n,isRead:true}
                }else{
                    notification = el;
                }
            })
            return notification;
        })
        setNotification(mNotifications)
    },[])
    return(
        <ChatContext.Provider value={
            {userChats,
            isUserChatsLoading,
            userChatsError,
            potentialChats,
            createChat,
            UpdateCurrentChat,
            messages,
            isMessageLoading,
            messageError,
            currentChat,
            sendMessage,
            onlineUsers,
            notification,
            allUsers,
            markAllNotificationsAsRead,
            markNotificationAsRead,
            MarkThisUserNotification}
        }>
            {children}
        </ChatContext.Provider>
    )
}
