import { useContext } from "react"
import { Link } from "react-router-dom"
import authContext from "../context/authContext"


const NavBar = () => {

const {theme,handleChnage} = useContext(authContext)


  return (
  <>
  <div className={theme?"bg-blue-600 text-white p-3 flex justify-between":"bg-black text-white p-3 flex justify-between"}>
    <div className="mx-10">Logo</div>
    <div  className="mx-10 flex gap-10">
       
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <button className="bg-white text-black p-1 rounded w-40" onClick={handleChnage}>{theme?"Dark":"Light"}</button>
    </div>
  </div>
  </>
  )
}

export default NavBar
