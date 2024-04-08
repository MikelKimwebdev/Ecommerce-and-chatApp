export const baseUrl = "http://localhost:5000/api"

export const postRequest=async(url,body)=>{
    //we are getting response from fetch method
    const response=await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body,
    });

    const data=await response.json();


//checking for error using ok method
//using checks from the status in the server
    if(!response.ok) {
        let message;

        if(data?.message){
            message=data.message;
        }
        else{
            message=data;
        }
        return {error:true,message}
    }
    return data;
}
export const getRequest=async(url)=>{
    const response = await  fetch(url)

    const data = await response.json();

    if(!response.ok){
        let message = "An error occurred..."
       
        if(data?.message){
            message = data.message
        }
        return{error:true,message}
    }
    //if no error
    return data;
}
