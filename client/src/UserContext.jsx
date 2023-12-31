import { children, createContext, useEffect, useState } from "react";
import axios from "axios"


export const UserContext=createContext({})
export function UserContextProvider({children}){
    const [user,setUser]=useState("")
    const [ready,setReady]=useState(false)
    useEffect(()=>{
        if(!user){
            // axios.get("/profile")
            async function getProfile(){

               let response=await  fetch("http://localhost:4000/profile",{
                    method:"GET",
                    headers:{"Content-Type":"application/json"},
                    credentials:"include"
                })
                let data= await response.json()
                console.log(data.name,"from context")
               setUser(data)
              setReady(true)
            }
            getProfile()
        }
        
        },[])
    return (
        <UserContext.Provider value={{user,setUser,ready}}>
        {children}
        </UserContext.Provider>
       
    )
}