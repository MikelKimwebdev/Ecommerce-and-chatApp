import { createContext, useState, useCallback } from "react";
import { postRequest, baseUrl } from '../../Services/service';

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
    const [Admin, setAdmin] = useState(null);
    const [AdminRegError, setAdminRegError] = useState(null);
    const [AdminLoading, setAdminLoading] = useState(false);
    const [AdminRegisterInfo, setAdminRegisterInfo] = useState({
        SecurityKey: "",
        Email: "",
        NewPassword: "",
        ConfirmPassWord: "",
    });
    const[AdminLogError,setAdminLogError]=useState(null);
    const[AdminLogLoading,setAdminLogLoading]=useState(false);
    const [AdminLogInfo,setAdminLogInfo]=useState({
        SecurityKey :"",
        Email:"",
        Password:"",
    });
    console.log("AdminLogInfo", AdminLogInfo);
    console.log("AdminRegisterInfo", AdminRegisterInfo);

    const UpdateRegisterInfo = useCallback((info) => {
        setAdminRegisterInfo(info);
    }, []);

    const UpdateLogInfo = useCallback((info) => {
        setAdminLogInfo(info);
    },[])

    const registerAdmin = useCallback(async (a) => {
        try {
            a.preventDefault();
            setAdminLoading(true);
            setAdminRegError(null);
            const response = await postRequest(`${baseUrl}/Admin/registerAdmin`, JSON.stringify(AdminRegisterInfo));
            setAdminLoading(false);
            if (response.error) {
                return setAdminRegError(response);
                console.log(response);
            }
            localStorage.setItem("Admin", JSON.stringify(AdminRegisterInfo));
            setAdmin(response);
            window.location.pathname = '/admin';
        } catch (error) {
            console.log("AdminRegError", error);
            setAdminRegError("An error occurred");
        }
    }, [AdminRegisterInfo]);   

    const LoginAdmin =useCallback(async(a)=>{
        try{
            a.preventDefault();
            setAdminLogLoading(true);
            setAdminLogError(null);
            const response = await postRequest(`${baseUrl}/Admin/login`, JSON.stringify(AdminLogInfo));
            console.log("RES",response)
            setAdminLogLoading(false);
            if(response.error){
                return setAdminLogError(response);
                console.log(response);
            }
            localStorage.setItem("Admin", JSON.stringify(response));
            setAdminLogLoading(response);
            window.location.pathname = '/admin';
        }catch(error){
            console.log(error);
        }
    },[AdminLogInfo])

    return (
        <AdminContext.Provider value={{
            Admin,
            AdminRegisterInfo,
            UpdateRegisterInfo,
            AdminRegError,
            AdminLoading,
            registerAdmin,
            AdminLogInfo,
            AdminLogError,
            AdminLogLoading,
            UpdateLogInfo,
            LoginAdmin
        }}>
            {children}
        </AdminContext.Provider>
    );
};
