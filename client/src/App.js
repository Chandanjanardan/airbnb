import React from 'react'
import Index from './pages/Index'
import {Routes,Route} from "react-router-dom"
import Fallback from './pages/Fallback'
import Login from './pages/Login'
import Layout from './components/Layout'
import Register from './pages/Register'
import "./App.css"
import axios from "axios"
import { UserContextProvider } from './UserContext'

axios.defaults.baseURL="http://localhost:4000"

function App() {

  return (
    <>
    <UserContextProvider>

   <Routes>
    <Route path='/' element={<Layout/>}>

    <Route index element={<Index/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    </Route>
    <Route path='*' element={<Fallback/>}/>
   </Routes>
    </UserContextProvider>
    </>
  )
}

export default App