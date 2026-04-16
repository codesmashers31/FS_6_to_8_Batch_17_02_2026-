import Home from "./components/Home"

const App = ()=>{

  const title = "This is My Reandring"
  const count = 0
  const isActive = false

  const datas = "React"

return (<>

<h1>{title}</h1>

<p>{count}</p>

{/* condtion?"":"" */}

{isActive?"This is True":"This is False"}


{isActive && "This is Only its showing True"}


<h1>
  {datas??"This is Null"}
</h1>

<Home/>

</>)


}


export default App