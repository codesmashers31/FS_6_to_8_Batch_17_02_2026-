import React, { useState } from 'react'

const ColorChange = () => {

  const [color,setColor] = useState("bg-white")
  
  const handleClick = ()=>{

    if(color==="bg-white"){
      setColor("bg-blue-500")
    }
    if(color==="bg-blue-500"){
      setColor("bg-red-500")
    }

  }

  const handleColor = ()=>{

    
setColor("bg-red-500")

  }

  return (
    <>
    <div className='bg-purple-700 text-white p-10 flex flex-col gap-5 justify-center items-center h-100'>
      <div className={`${color} text-black p-2 w-50 h-50`}>
         Box
      </div>

      <button onClick={handleClick} className='bg-white text-black rounded p-1 w-50 text-center'>
        Click To change Color
      </button>


    </div>


    <hr />

     <div className='bg-green-700 text-white p-10 flex flex-col gap-5 justify-center items-center h-100'>
      <div className={`${color} text-black p-2 w-50 h-50`}>
         Box
      </div>

      <button onClick={handleColor} className={`${color} text-black rounded p-1 w-50 text-center`}>
        Click To Red
      </button>

         <button onClick={handleColor} className='bg-white text-black rounded p-1 w-50 text-center'>
        Click To Green
      </button>
         <button onClick={handleColor} className='bg-white text-black rounded p-1 w-50 text-center'>
        Click To Yellow
      </button>

      
    </div>
    </>
  )
}

export default ColorChange
