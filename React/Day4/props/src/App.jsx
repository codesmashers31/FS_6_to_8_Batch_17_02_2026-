import React from 'react'
import Home from './Home'

const App = () => {

 const datas = "Node"

  return (
  <>
  <Home  sending={datas} />
  <div className='bg-yellow-200 text-black text-2xl h-100 w-40 p-3'>
    Big
  </div>
  </>
  )
}

export default App
