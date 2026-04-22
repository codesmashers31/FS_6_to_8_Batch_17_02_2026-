import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ConditionalRendering from '../components/ConditionalRendering'
import ToggleProcess from '../components/ToggleProcess'
import ThemeChange from '../components/ThemeChange'
import ColorChange from '../components/ColorChange'

const AppRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<ConditionalRendering/>}  />
      <Route path="/colorchange" element={<ColorChange/>}  />
      <Route path="/theme" element={<ThemeChange/>}  />
      <Route path="/toggle" element={<ToggleProcess/>}  />
    </Routes>
    </>
  )
}

export default AppRoutes
