import {useContext,useEffect,useState} from 'react';
import { ChatContext } from '../context/chatContext';
import { baseUrl,getRequest } from '../Services/service';

export const useFetchLatestMessage =(chat)=>{
    const{newMessage,notification}=useContext(ChatContext);
    const[latestMessage,setLatestMessage]=useState(null);

    useEffect(()=>{
        const getMessages = async()=>{
            const response = await getRequest (`${baseUrl}/messages/${chat?._id}`);
            if(response.error){
                return console.log("Error getting messages",response);
            }
            const lastMessage= response[response?.length -1];//position of the lat message
            setLatestMessage(lastMessage);
        };
        getMessages();

    },[newMessage,notification]);
    return {latestMessage}
}