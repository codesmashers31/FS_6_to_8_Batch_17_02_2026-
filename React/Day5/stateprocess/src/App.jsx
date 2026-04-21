import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import StateProcess from './components/StateProcess'
import RenderProcess from './components/RenderProcess'
import NavBar from './components/NavBar'

const App = () => {
  return (
   <>
   <NavBar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/state'  element={<StateProcess/>}/>
    <Route path='/render'  element={<RenderProcess/>}/>
   </Routes>
   </>
  )
}

export default App
