import { useState } from "react"


const ConditionalRendering = () => {

  const [color,setColor] = useState(false)

  const handleClick = ()=>{
      setColor(!color)
  }
  return (
    <>
    <div>
      <h1>Conditional rendering</h1>
      <p>{color?<p className="bg-red-500 p-2">This is True</p>:<p className="bg-yellow-500 p-2">This is False</p>}</p>
      <button onClick={handleClick}>Click To Update</button>
    </div>
    </>
  )
}

export default ConditionalRendering
