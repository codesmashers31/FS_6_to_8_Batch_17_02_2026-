import React, { useState } from 'react'

const ToggleProcess = () => {
const [hide,setHide] = useState(false)

  const hideandshow = ()=>{
setHide(!hide)
  }
  return (
    <>
    <div className='bg-yellow-300 p-10'>
      <button onClick={hideandshow} className='bg-black text-white p-2 mb-2 w-30 rounded'>Toggle</button>
      {hide&&<div className='bg-white p-5 rounded w-100'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, impedit cupiditate. Dolores, dolorem? Consequuntur suscipit animi quis, placeat deleniti repudiandae autem beatae modi vitae voluptate temporibus illum cupiditate, enim dolorum!</p>
      </div>}
      
    </div>
    </>
  )
}

export default ToggleProcess
