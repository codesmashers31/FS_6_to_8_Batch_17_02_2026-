import { useEffect, useState } from "react"


const Timer = () => {


const [count,setCount] = useState(0)


useEffect(()=>{
    const adding = setInterval(()=>{


    setCount((prev)=>prev+1)

    return ()=> clearInterval(adding)

},1000)
},[])





  return (
    <>
    <h1>Timer {count}</h1>


    </>
  )
}

export default Timer
