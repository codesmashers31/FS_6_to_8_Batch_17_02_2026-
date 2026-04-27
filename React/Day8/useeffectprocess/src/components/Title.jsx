import { useEffect, useState } from "react"


const Title = () => {
   console.log('component Running..');
   
  const [titel,setTitle] = useState("UseEffect")


 const chagedata = ()=>{

  setTitle("Change")

 }

 useEffect(()=>{
  console.log('UseEffect Rendering...');
  
  (async ()=>{
    chagedata()
  })()

 },[])

  return (
    <>
    {titel}
    </>
  )
}

export default Title
