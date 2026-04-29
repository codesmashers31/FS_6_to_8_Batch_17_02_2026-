import { useEffect, useState } from "react"


const App = () => {

 const [formData,setformData] = useState({username:"",taskname:"",taskstatus:"",taskenddate:""})
 const [showData,setShowData] = useState([])
const handleChange = (e)=>{
  setformData({...formData, [e.target.name]:e.target.value})
}



const getData = ()=>{


  const getbylocal = localStorage.getItem("todo")

  const changeData = JSON.parse(getbylocal)
  
  setShowData(changeData)




}

useEffect(()=>{
  (async()=>{getData()})()
},[formData])



const handleSubmit = (e)=>{

  e.preventDefault()

  const getData = localStorage.getItem("todo")
  const changeData = JSON.parse(getData)
    
  const saveData = changeData || []

  saveData.push(formData)


  localStorage.setItem("todo",JSON.stringify(saveData))

  alert("Successfully Added")
  
  setformData({username:"",taskname:"",taskstatus:"",taskenddate:""})

  
 

}

  return (
    <>
    <div className="p-8 bg-indigo-200 flex justify-center items-center from-blue-50 to-indigo-50 min-h-screen">
    
    <div className="p-10 bg-white rounded h-100 flex items-center w-180">
       
        <div>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/005/879/539/small/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg" alt="" />
    </div>
        <form className="p-2 flex flex-col gap-5" onSubmit={handleSubmit}>
             <h3 className="text-2xl font-bold text-gray-800">Create Your Account</h3>
             <input type="text" name="username" value={formData.username} onChange={handleChange}  placeholder="Enter your Name" className="border border-blue-500 rounded w-70 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
             <input type="text" name="taskname"    value={formData.taskname}   onChange={handleChange}  placeholder="Enter your Task" className="border border-blue-500 rounded w-70 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
             <input type="text" name="taskstatus"   value={formData.taskstatus}   onChange={handleChange}  placeholder="Enter your Status" className="border border-blue-500 rounded w-70 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
             <input type="date" name="taskenddate"      value={formData.taskenddate}    onChange={handleChange}  placeholder="End Date" className="border border-blue-500 rounded w-70 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
             <input type="submit" value={"Add Task"} className="bg-blue-600 hover:bg-blue-700 rounded p-2 text-white w-70 font-semibold cursor-pointer transition-colors"  />
        </form>
    </div>
   </div>



   <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Tasks Overview</h2>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-indigo-600">
              <th className="px-6 py-4 text-left text-white font-semibold">S.No</th>
              <th className="px-6 py-4 text-left text-white font-semibold">Name</th>
              <th className="px-6 py-4 text-left text-white font-semibold">Task Name</th>
              <th className="px-6 py-4 text-left text-white font-semibold">Task Status</th>
              <th className="px-6 py-4 text-left text-white font-semibold">End Date</th>
            </tr>
          </thead>
          <tbody>
            {showData.map((e,i)=>(
              <tr key={i+1} className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200">
                <td className="px-6 py-4 text-gray-700 font-medium">{i+1}</td>
                <td className="px-6 py-4 text-gray-700">{e.username}</td>
                <td className="px-6 py-4 text-gray-700">{e.taskname}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    e.taskstatus === 'Completed' ? 'bg-green-200 text-green-800' :
                    e.taskstatus === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
                    e.taskstatus === 'In Progress' ? 'bg-blue-200 text-blue-800' :
                    'bg-gray-200 text-gray-800'
                  }`}>
                    {e.taskstatus}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-700">{e.taskenddate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   </div>
    </>
  )
}

export default App
