import React, { useState } from 'react'

const FormHandling = () => {


 const [takeName,setTakeName] = useState("")

 const [data,setData] = useState("")

const handleChange = (e)=>{

   setTakeName(e.target.value)

}


const handelClick = (e)=>{

  setData(takeName)

}
  return (
    <>
    <input className='border p-2 text-black w-90' type="text" onChange={handleChange} placeholder='ennter your name' />
    <h1>{takeName}</h1>
    <button onClick={handelClick}>Click The Vlaue</button>
    </>
  )
}

export default FormHandling
