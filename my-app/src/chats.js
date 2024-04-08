import React from 'react'
import {useState} from 'react';
import { CiFaceMeh } from "react-icons/ci";
import { useContext } from 'react';
import { ChatContext } from './context/chatContext';
import Nav from './nav'
import Footer from './footer'
import UserChat from './chats/chatsample'
import ViewChat from './chats/ViewChat';
import {AuthContext} from './context/AuthContext';
import PotentialChats from './chats/PotentialChats';
const Chat = () => {
 
  const {user}=useContext(AuthContext)
  const{
    userChats,
    isUserChatsLoading,
    userChatsError,
    UpdateCurrentChat,
  }=useContext(ChatContext)
  
  console.log("UserChats", userChats)

  return (
    <>
    <div className='chat-nav'><Nav/></div>
    <div className='chats-area'>
    
    <div className='display-chats'>
    
    <div className='Potential-users'>
    <PotentialChats/>
    </div>
    <div></div>
    {userChats?.length < 1 ? null : <div className='chat-View'>
      <div>
        {isUserChatsLoading && <p>Loading...</p>}
        {
          userChats?.map((chat,index)=>{
            return(
              <div key={index} onClick={()=>UpdateCurrentChat(chat)}>
                <UserChat chat={chat} user={user}/>
              </div>
            )
          })
        }
      </div>
      <div className='Chat-ViewChat'>
      <div><ViewChat/></div>
      </div>
    </div>}
    </div>
    
    </div>
    <div className='chat-footer'><Footer/></div>
    </>
  )
}

export default Chat;
