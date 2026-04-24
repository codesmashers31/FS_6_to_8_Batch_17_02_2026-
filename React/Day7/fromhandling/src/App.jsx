import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import FormHandling from './pages/FormHandling'
import Login from './pages/Login'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<FormHandling/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </>
  )
}

export default App
