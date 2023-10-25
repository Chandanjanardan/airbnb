import React from 'react'
import Index from './pages/Index'
import {Routes,Route} from "react-router-dom"
import Fallback from './pages/Fallback'
import Login from './pages/Login'
import Layout from './components/Layout'

function App() {

  return (
   <Routes>
    <Route path='/' element={<Layout/>}>

    <Route index element={<Index/>}/>
    <Route path='/login' element={<Login/>}/>
    </Route>
    <Route path='*' element={<Fallback/>}/>
   </Routes>
  )
}

export default App