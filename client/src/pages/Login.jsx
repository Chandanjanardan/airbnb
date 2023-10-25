import React from 'react'

function Login() {
  return (
    <div className='mt-4'>
        <h1 className='text-4xl text-center'>Login</h1>
        <form className='max-w-md mx'>
            <input type='email' placeholder='email@email.com'/>
            <input type='password' placeholder='password'/>
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login