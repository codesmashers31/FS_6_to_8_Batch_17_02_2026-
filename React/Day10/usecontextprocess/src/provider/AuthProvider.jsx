import { useState } from "react"
import authContext from "../context/authContext"


const AuthProvider = ({children}) => {

 const [theme,setTheme] = useState(false)


 const handleChnage = ()=>{

    setTheme(!theme)
 }

 const datas =[
    {img:"https://t4.ftcdn.net/jpg/02/32/98/31/360_F_232983161_9lmUyHKnWbLW0vQPvWCrp5R5DSpexhbx.jpg",productName:"Tomoto",productPrice:"200",ProductCat:"Veg"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPuxJEcREPW2ZboG7j33jOflJ3sa-FYj9-_g&s",productName:"Carrot",productPrice:"100",ProductCat:"Veg"},
    {img:"https://images.stockcake.com/public/d/6/1/d614f56b-8227-4cda-a894-32f9b422bfd4_large/fresh-green-apple-stockcake.jpg",productName:"Apple",productPrice:"150",ProductCat:"Fruit"}]


  return (
    <>
    
    <authContext.Provider value={{theme,handleChnage,datas}}>
        {children}
    </authContext.Provider>
    
    </>
  )
}

export default AuthProvider
