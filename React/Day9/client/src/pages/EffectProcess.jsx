import { useEffect, useState } from "react"


const EffectProcess = () => {

    const [showData,setShowData] = useState([])

useEffect(()=>{

const fecthdata = async ()=>{

    const get = await fetch("https://dummyjson.com/todos")
    const changedata = await get.json()
    console.log(changedata);
    
    setShowData(changedata.todos)


}

fecthdata()

},[])
 

const handleEdit = (userIDs)=>{

    alert(userIDs)



}


  return (
    <>
    <div className="p-8 bg-indigo-200 from-blue-50 to-indigo-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Task Management</h1>
            <p className="text-gray-600 mb-6">View and manage your tasks efficiently</p>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="bg-indigo-50 from-blue-600 to-indigo-600 text-white">
                            <th className="px-6 py-4 text-left font-semibold">S.no</th>
                            <th className="px-6 py-4 text-left font-semibold">Task</th>
                            <th className="px-6 py-4 text-left font-semibold">Status</th>
                            <th className="px-6 py-4 text-left font-semibold">User ID</th>
                            <th className="px-6 py-4 text-left font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {showData.map((e)=>(
                            <tr key={e.id} className="hover:bg-blue-50 transition-colors duration-200">
                                <td className="px-6 py-4 text-gray-700">{e.id}</td>
                                <td className="px-6 py-4 text-gray-700 font-medium">{e.todo}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                                        e.completed 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {e.completed ? "✓ Completed" : "⏳ In Progress"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-700">{e.userId}</td>
                                <td className="px-6 py-4">
                                    <button onClick={()=>handleEdit(e.userId)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold shadow-md hover:shadow-lg">
                                        Edit
                                    </button>
                                </td>
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

export default EffectProcess
