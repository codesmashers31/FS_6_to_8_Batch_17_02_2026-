// import { useRef } from "react"

import { useRef } from "react"


// const App = () => {
//  console.log('Running');
 

// const myRef = useRef()

// const inputRef = useRef(null)
// const showRef = useRef("")

// //console.log(myRef.current);

// const handleClick = ()=>{

//   myRef.current.innerHTML= "My Ref Process is updated"
//   const check = inputRef.current.value

//   if(check==="blue"){

//     showRef.current.style.backgroundColor="blue"

//   }else{
// showRef.current.style.backgroundColor="black"
//   }

// }





//   return (
//    <>
//     <div className="bg-amber-300 text-black p-10 text-center">
//       <h1 className="mb-2" ref={myRef}>Use Ref</h1>
//       <button onClick={handleClick} className="bg-white text-balck p-1 w-40 rounded">Click Me</button>
//     </div>



//     <div className="bg-green-500 text-white p-10">
//        <input ref={inputRef}  className="border p-2 w-100" type="text" placeholder="Enter the Name" />
//        {/* <p ref={showRef}></p> */}

//     </div>

//     <h1 ref={showRef}>This is error</h1>
//    </>
//   )
// }

// export default App





// const App = () => {

//  const myRef = useRef(null)

//   const handleclick = ()=>{

//     myRef.current.innerText = "This is the Updated Ref Value"
//     myRef.current.style.color = "red"


//   }

//   return (
//    <>
   
//    <h1 className="bg-blue-400 mb-4 text-black p-10" ref={myRef}>This is My Data</h1>
//    <button className="p-1 bg-black rounded w-50 text-white mx-5" onClick={handleclick}>Click The Button</button>
   
//    </>
//   )
// }

// export default App







const App = () => {


  const textRef = useRef(null) 
  const showRef = useRef("")

  const handleChange = ()=>{

    const values = textRef.current.value

    //alert(values)

    if(!values){
      alert("pLease Showing the Text")
      return
    }

    if(values%2===0){

showRef.current.innerText = "Even Number"

    }else{

      
showRef.current.innerText = "Odd Number"
      
    }

  }

  return (
   <>
   <input ref={textRef} type="text" className="mx-4 border p-2 w-100 my-6" placeholder="Enter The Number" />
   <p ref={showRef}></p>

   <button  onClick={handleChange}>Click</button>
   </>
  )
}

export default App
