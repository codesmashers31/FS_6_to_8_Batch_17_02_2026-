import { useState } from "react"


const ArrayLoopMap = () => {

const datas =[
    {img:"https://t4.ftcdn.net/jpg/02/32/98/31/360_F_232983161_9lmUyHKnWbLW0vQPvWCrp5R5DSpexhbx.jpg",productName:"Tomoto",productPrice:"200",ProductCat:"Veg"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPuxJEcREPW2ZboG7j33jOflJ3sa-FYj9-_g&s",productName:"Carrot",productPrice:"100",ProductCat:"Veg"},
    {img:"https://images.stockcake.com/public/d/6/1/d614f56b-8227-4cda-a894-32f9b422bfd4_large/fresh-green-apple-stockcake.jpg",productName:"Apple",productPrice:"150",ProductCat:"Fruit"}]

const [showData] = useState(datas)



  return (
    <div className="bg-green-300 p-10 h-120 flex flex-col justify-center items-center gap-10">
   

    <div className="flex gap-10">
        {showData.map((e,i)=>(
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

export default ArrayLoopMap
