import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import ArrayLoopMap from "./pages/ArrayLoopMap"
import EffectProcess from "./pages/EffectProcess"
import FromHandling from "./pages/FromHandling"
import Login from "./pages/Login"


const App = () => {
  return (
   <>
   <NavBar/>
   <Routes>
    <Route path="/" element={<ArrayLoopMap/>} />
    <Route path="/effect" element={<EffectProcess/>} />
    <Route path="/form" element={<FromHandling/>} />
    <Route path="/login" element={<Login/>} />
   </Routes>
   </>
  )
}

export default App
