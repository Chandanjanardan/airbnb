import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'


function Account() {
  const {setUser,user,ready}= useContext(UserContext)
  console.log(user,ready)
  const {subpage}=useParams()
 
  const navigate=useNavigate()
 if(!ready){
  return "Loading please wait..."
 }
 if(!user){
   navigate("/login")
  }
 async function logout(){
 await fetch("http://localhost:4000/logout",{
    method:"POST",
    credentials:"include"})
    navigate("/")
    setUser("")
    window.location.reload(true)
    
  
  }
 

  return (
    <div><nav className='account w-full flex justify-center mt-8 gap-2'>
      <NavLink className={"py-2 px-6" }to="/account/profile">My Profile</NavLink>
      <NavLink className="py-2 px-6"to="/account/booking">My booking</NavLink>
      <NavLink className="py-2 px-6"to="/account/places">My places</NavLink>
      </nav>
      <div className='text-center max-m-lg mx-auto'>
        Logged in as {user?.name}{user?.email}<br/>
        <button onClick={logout}className='primary max-w-sm-mt-4'>Logout</button>
        </div></div>
  )
}

export default Account