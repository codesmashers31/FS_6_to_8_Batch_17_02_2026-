import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

 const navigate = useNavigate()

 const [userEmail,setUserEmail] = useState("")
 const [userpassword,setUserPassword] = useState("")

const handleChange = (e)=>{

setUserEmail(e.target.value)

}


const handelPassword = (e)=>{
setUserPassword(e.target.value)
}


const handleSUbmit = (e)=>{

e.preventDefault()


const email = "react@gmail.com"
const password = "1234"


if(userEmail===email &&  userpassword===password){

   navigate("/")
   return


}else{
  alert('This is Not a Valid user')
}


}

  return (
    <>
    <div className='bg-white text-balck p-10 flex justify-center items-center h-100'>
      <div className='flex border p-5 text-center flex-col gap-5'>
        <h1>Login WIth You Crtincials</h1>
        <form onSubmit={handleSUbmit} className='p-10 flex gap-10 flex-col justify-start rounded items-start'>
           <input type="email" onChange={handleChange} className='border w-80 rounded p-2' placeholder='Enter the Email' />
           <input type="password" onChange={handelPassword} className='border w-80 rounded p-2' placeholder='Enter the Password' />
           <input className='bg-amber-400 text-black rounded p-2 w-40' type="submit" value={"Login"} />
        </form>
      </div>
    </div>
    </>
  )
}

export default Login
