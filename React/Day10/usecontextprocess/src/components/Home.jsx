import { useContext } from "react"

import authContext from "../context/authContext";


const Home = () => {


  
    const {theme,datas} = useContext(authContext)




  return (
    <div className={theme?"bg-blue-600 text-white p-10 flex justify-center items-center":"bg-black text-white p-10 flex justify-center items-center"}>
      <div>Home</div>

       <div className="flex gap-10">
        {datas.map((e,i)=>(
         <div className="bg-white p-2 rounded w-50 h-80" key={i}>
        <img src={e.img} alt="" className="h-50" />
        <h1>{e.productName}</h1>
        <p>{e.ProductCat}</p>
        <p>{e.productPrice}</p>
        <button className="bg-black text-white p-1 rounded w-30">Buy Now</button>
          </div>
    ))}
    </div>
    </div>
  )
}

export default Home
