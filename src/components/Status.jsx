import React from 'react'
import axios from "axios";
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const Auth = () => {
    const {isAuth,toggleAuth} = useContext(AuthContext);

    const api = async () => {
        let res=await axios.get("https://reqres.in/api/login");
        console.log(res.data);
    }
    const data={
        "email": "eve.holt@reqres.in",
        "password": "cityslicka",
        "token": "QpwL5tke4Pnpja7X4"
    };
    const {email,password,token}=data
    // console.log(email,password,token)
api();
  return (
    <div>
        <button onClick={()=>{
            if(isAuth===false || isAuth===true){
                toggleAuth(email,password);
            }
        }
        }>{isAuth ? "LogOut" : "LogIn"}</button>
        {isAuth && `Logged In Using Token ID- ${token}`}
    </div>
  )
}

export default Auth