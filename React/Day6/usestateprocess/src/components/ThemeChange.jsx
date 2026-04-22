import React, { useState } from 'react'
import NavBar from './NavBar'

const ThemeChange = () => {
 
  const [theme,setTheme] = useState(false)

 const themechnage = ()=>{

  setTheme(!theme)

 }

  return (
    <>
   
    <div className={theme?'bg-black text-white p-2':'bg-white text-black p-2'}>
     <button onClick={themechnage} className='bg-white text-black p-2 rounded'>{theme?"Light":"Dark"}</button>
    </div>
    </>
  )
}

export default ThemeChange
