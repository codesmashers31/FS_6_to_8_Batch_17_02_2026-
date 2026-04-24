import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='bg-blue-600 text-white p-3 flex justify-between items-center'>
        <div className='mx-10'>Logo</div>
        <div className='mx-10 flex gap-10'>
            <Link to={"/"}>Form Handling</Link>
            <Link to={"/login"}>Login</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar
