import React from 'react'
import Banner from './Banner'

const Navbar = () => {
  return (
   <>
   <div className='parentnav'>
    <div>
        <img src="./favicon.svg"  />
    </div>
    <div className='childnav'>
   <a href="">Home</a> 
   <a href="">About</a> 
   <a href="">Contect</a> 
   <a href="">Help</a> 

    </div>
   </div>


   <Banner/>
   </>
  )
}

export default Navbar
