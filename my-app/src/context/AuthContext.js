import { createContext, useState ,useEffect} from "react";
import { useCallback } from "react";
import { postRequest, baseUrl } from "../Services/service";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [regError, setRegError] = useState(null);
  const [isRegisterLoading, setRegisterLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const[LoginError,setLoginError]=useState(null);
 const[isLoginLoading,setIsLoginLoading]=useState(false);
  const [LoginInfo,setLoginInfo]=useState({
    email:"",
    password:"",
  })
// console.log(LoginInfo);
  console.log("RegisterInfo", registerInfo);
//   console.log("User",user)
useEffect(()=>{
const user = localStorage.getItem("User");
setUser(JSON.parse(user));
},[])
//we are updating our backend with data we input in the form
  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);
  const UpdateLoginInfo=useCallback((info)=>{
    setLoginInfo(info)
  },[]);

  const registerUser = useCallback(async (e) => {
    try {
      e.preventDefault();
      setRegisterLoading(true);
      setRegError(null);
      const response = await postRequest(`${baseUrl}/users/register`, JSON.stringify(registerInfo));
      setRegisterLoading(false);
      if (response.error) {
       return setRegError(response); // Fix: Access 'error' property in the response
      }

      localStorage.setItem("User", JSON.stringify(response));
      setUser(response);
    } catch (error) {
      console.error("Error during registration:", error);
      setRegError("An error occurred during registration."); // Set a generic error message
    }
  }, [registerInfo]);

  const LoginUser = useCallback(async(e)=>{
    e.preventDefault();
    setIsLoginLoading(true)
    setLoginError(null)
    //setting our http request
    const response = await postRequest(`${baseUrl}/users/login`,JSON.stringify(LoginInfo))
    setIsLoginLoading(false);
  if(response.error){
    return setLoginError(response);
  }
  localStorage.setItem("User",JSON.stringify(response));
  setUser(response);
  },[LoginInfo]);

   const logOutUser=useCallback(()=>{
    localStorage.removeItem("User");
    setUser(null)
  },[]);

  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerUser, // Fix: Correct function name to camelCase
        regError,
        isRegisterLoading,
        logOutUser,
        LoginUser,
        LoginError,
        LoginInfo,
        isLoginLoading,
        UpdateLoginInfo
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
