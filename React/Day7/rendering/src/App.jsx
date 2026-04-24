import React, { useState } from 'react'
import Menu from './components/Menu'

const App = () => {

 const [theme,setTheme] = useState(false)

 const themechange = ()=>{

  setTheme(!theme)

 }

 

  return (
    <>
    <h1>Text Type using style</h1>
    <p className={theme?"bg-black mb-5 text-white p-2":"bg-blue-700 mb-5 text-white p-2"}>This is the Theme Change</p>
    <button className={theme?"bg-black text-white p-1 rounded w-30":"bg-blue-700 text-white p-1 rounded w-30"} onClick={themechange}>{theme?"Light":"Blue"}</button>
    <Menu  themes = {theme} />
    </>
  )
}

export default App
