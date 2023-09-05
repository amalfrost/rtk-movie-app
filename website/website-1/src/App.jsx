import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Contact from './Pages/Contact'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contacts' element={<Contact/>}/>
    </Routes>
      
    </>
  )
}

export default App
