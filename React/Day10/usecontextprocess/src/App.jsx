import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"


const App = () => {
  return (
<>
<NavBar/>
<Routes>

  <Route path="/" element={<Home/>} />
   <Route path="/about" element={<About/>} />
</Routes>
</>
  )
}

export default App
