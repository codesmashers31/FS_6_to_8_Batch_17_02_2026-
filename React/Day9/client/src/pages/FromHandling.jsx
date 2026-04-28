import { useState } from "react"
import { useNavigate } from "react-router-dom"


const FromHandling = () => {

const navigate = useNavigate()

const [formData,setFormData] = useState({username:"",email:"",mobile:"",age:""})

const handleChange = (e)=>{

setFormData({...formData, [e.target.name]:e.target.value})

}


const handleSubmit = (e)=>{

    e.preventDefault()

    if(!formData.username || !formData.email || !formData.mobile || !formData.age){
        alert("Please Enter All Fields")
        return
    }

     
    const store = localStorage.getItem("taskList")

    const storeArray = JSON.parse(store) || []
    
    // Push the form data object one by one into the array
    storeArray.push(formData)

    // Store the entire array back to localStorage
    localStorage.setItem("taskList", JSON.stringify(storeArray))

    alert("Successfully Registered")

    setFormData({username:"",email:"",mobile:"",age:""})

    navigate("/login")


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
             <input type="email" name="email"    value={formData.email}   onChange={handleChange}  placeholder="Enter your Email" className="border border-blue-500 rounded w-70 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
             <input type="tel" name="mobile"   value={formData.mobile}   onChange={handleChange}  placeholder="Enter your Mobile" className="border border-blue-500 rounded w-70 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
             <input type="number" name="age"      value={formData.age}    onChange={handleChange}  placeholder="Enter your Age" className="border border-blue-500 rounded w-70 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
             <input type="submit" value={"Register"} className="bg-blue-600 hover:bg-blue-700 rounded p-2 text-white w-70 font-semibold cursor-pointer transition-colors"  />
        </form>
    </div>
   </div>
   </>
  )
}

export default FromHandling
