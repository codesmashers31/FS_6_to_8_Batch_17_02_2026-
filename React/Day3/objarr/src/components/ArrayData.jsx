import React from 'react'

const ArrayData = () => {

const arr = [1,2,3,4,5,6]

const dataShowing = arr.filter((e)=>e%2==0)


  return (
   <>
  
  {dataShowing.map((e)=>(
    <p>{e}</p>
  ))
}

   <h1>{arr}</h1>
   </>
  )
}

export default ArrayData
