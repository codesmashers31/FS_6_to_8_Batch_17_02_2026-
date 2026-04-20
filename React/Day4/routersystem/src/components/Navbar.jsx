import { Link } from "react-router-dom"


const Navbar = () => {
  return (
   <>
   <div className="bg-blue-400 p-2 flex justify-between items-center">
    <div>
        Logo
    </div>
    <div className="flex gap-15">
        <Link className="bg-black text-white p-1 rounded-full w-20 text-center  hover:bg-white hover:text-black" to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </div>
   </div>
   </>
  )
}

export default Navbar
