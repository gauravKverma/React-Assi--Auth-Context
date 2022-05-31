import { useState } from "react";
import { createContext } from "react";

export const AuthContext=createContext();

export const AuthProvider= ({children}) => {
    const [isAuth,setIsAuth] = useState(false);
    // const login,logout;
    const toggleAuth = (email,password) => {
        console.log(email,password)
        if(isAuth===false){
            setIsAuth(true);
            console.log("Logged In")
        }
        else{
            setIsAuth(false);
            console.log("Logged Out")
        }
    }
    return(
        <AuthContext.Provider value={{isAuth,toggleAuth}}>
            {children}</AuthContext.Provider>
    )
}