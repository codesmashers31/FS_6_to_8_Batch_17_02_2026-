import React from 'react'
import About from './About';

const Home = ({sending}) => {

    console.log(sending);
    

    const titel = "Home"
  return (
    <>
    <div className='bg-black text-white p-2 h-screen'>
      {titel}{sending}
    </div>
    <About  newabouttitle={titel} />
    </>
  )
}

export default Home
