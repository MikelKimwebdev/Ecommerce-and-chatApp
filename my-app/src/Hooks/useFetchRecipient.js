import {useEffect,useState} from 'react';
import {baseUrl,getRequest} from '../Services/service';
export const useFetchRecipientUser =(chat,user) =>{
    console.log("Chat:", chat);
    console.log("UserOf:", user);
    const [recipientUser,setRecipientUser]=useState(null);
    const[error,setError]=useState(null);
    
    const recipientId = chat?.members.find((id)=>
        id !== user?._id
    )
    console.log("recipientId",recipientId);
    useEffect (()=>{

        const getUser = async()=>{
            
            if(!recipientId) return null;
            const response = await getRequest(`${baseUrl}/users/find/${recipientId}`);
            console.log("API Response:", response);
            if(response.error){
                return setError(error)
            }
            setRecipientUser(response);
    
   
    }
    getUser();

    },[recipientId])
    return {recipientUser}
}