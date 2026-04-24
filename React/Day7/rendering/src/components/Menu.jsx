import React from 'react'

const Menu = ({themes}) => {
  return (
 
<>
<h1 className={themes?"bg-black mb-5 text-white p-2":"bg-blue-700 mb-5 text-white p-2"}>This is the same Text using props</h1>
</>
  )
}

export default Menu
