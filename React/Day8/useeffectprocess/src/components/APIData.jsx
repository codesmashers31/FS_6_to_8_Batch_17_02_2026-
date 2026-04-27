import { useEffect, useState } from "react"


const APIData = () => {
  
  const [dataGet,setDataGet] = useState([])

  


useEffect(()=>{
    const fetchdata = async ()=>{

    const getData = await fetch("https://dummyjson.com/products")
    const changeData = await getData.json()

    //console.log(changeData);
    setDataGet(changeData.products)

  }
    fetchdata()
},[])


  return (
    <>


      {dataGet.map((e)=>(
        <p key={e.id}>{e.price}</p>
    ))}



    <h1>Api Data</h1>
   
   <table border={1}>
    <tr> 
        <th>S.No</th>
        <th>Title</th>
        <th>Price</th>
        <th>Cat</th>
    </tr>

    <tbody>

        {dataGet.map((e)=>(
         <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.title}</td>
            <td>{e.price}</td>
            <td>{e.category}</td>
        </tr>
        ))}
        
    </tbody>
   </table>


 
    </>
  )
}

export default APIData
