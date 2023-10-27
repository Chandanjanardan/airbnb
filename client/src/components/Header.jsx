import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'

function Header() {
  let {user}=useContext(UserContext)
 
  console.log(user,"header page")
  return (
    <div>
    <header className=' flex justify-between'>
      <Link to='/' className='flex items-center gap-1'>
        <img className="w-20 h-10 "src='https://cdn.worldvectorlogo.com/logos/airbnb-logo-belo-1.svg'/>
      </Link>
      <div className='flex border border-gray-300 rounded-full py-2 px-4 gap-2 shadow-md showdow-gray-300'>
        <div>Anywere</div>
        <div className='border border-l border-gray-300'>
          
        </div>
        <div>Any week</div>
        <div className='border border-l border-gray-300'>

        </div>
        <div>Add guest</div>
        <button className='bg-primary text-white p-1 rounded-full'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
        </button>
      </div>
      <Link to={user?"/account":"/login"} className='flex border border-gray-300 rounded-full py-2 px-4 gap-2 items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
<div className='bg-gray-500 text-white rounded-full border border-gray-300 overflow-hidden'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 relative top-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

</div>
{user && (
  <div>{
    user.name}</div>
)}

</Link>
    </header>
    </div>
  )
}

export default Header