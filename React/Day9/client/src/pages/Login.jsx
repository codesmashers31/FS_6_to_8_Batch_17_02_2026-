import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Login = () => {

const navigate = useNavigate()

const [formData,setFormData] = useState({email:""})

const handleChange = (e)=>{

setFormData({...formData, [e.target.name]:e.target.value})

}


const handleSubmit = (e)=>{

    e.preventDefault()


    const dataSave = JSON.parse(localStorage.getItem("taskList"))


        //alert("Successfully Register")

        //console.log(dataSave);
        

        if(dataSave.email === formData.email){

               setFormData({email:""})
               navigate("/dashbaord")
            

        }else{

            
         
            
            alert("Your Not Vaild use")
            
            navigate("/form")
            
        }

 

    


}


  return (
   <>
   <div className="p-8 bg-indigo-200 flex justify-center items-center from-blue-50 to-indigo-50 min-h-screen">
    
    <div className="p-10 bg-white rounded h-100 flex items-center w-180">
       
        <div>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/005/879/539/small/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg" alt="" />
    </div>
        <form className="p-2 flex flex-col gap-5" onSubmit={handleSubmit}>
             <h3>Login Your DashBoard</h3>
             
             <input type="text" name="email"    value={formData.email}   onChange={handleChange}  placeholder="Enter the Email" className="border border-blue-500 rounded w-70 p-2" />
             
             <input type="submit" value={"Register"} className="bg-black rounded p-2 text-white w-70"  />
        </form>
    </div>
   </div>
   </>
  )
}

export default Login
