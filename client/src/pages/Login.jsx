import React,{useContext, useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { UserContext } from '../UserContext'

function Login() {
  const {user,setUser}=useContext(UserContext)
  const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [password, setPassword] = useState("")
 async function handleSubmit(e){
    e.preventDefault()
    try {
      let response= await fetch("http://localhost:4000/login",{
         method:"POST",
         headers:{"Content-Type":"application/json"},
         body:JSON.stringify({
           email,password
         }),
         credentials:"include"
        })
      //  let data= await response.json()
      //  console.log(data)
        if(response.status===200){
          alert("Login succesfull")
          let data=await response.json()
         setUser(data.name)
          navigate("/")
        }else{
          alert("Wrong creadentials")
        }
      
    } catch (error) { 
      console.log(error)
      
    }

  }

   
 
  return (
    <div className="mt-32 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <input type="email"
                 placeholder="your@email.com" value={email} onChange={(e)=>setEmail(e.target.value)}
                 
                  />
          <input type="password"
                 placeholder="password"
                 value={password} onChange={(e)=>setPassword(e.target.value)}
               
 />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register now</Link>
          </div>
        </form>
      </div>
    </div>
 
  )
}

export default Login