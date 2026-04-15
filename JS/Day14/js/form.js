// const fromData = document.getElementById("register")

// fromData.addEventListener("submit",(e)=>{
// e.preventDefault()
//  const name = document.getElementById("username").value
//  const email = document.getElementById("useremail").value
//  const password = document.getElementById("userpassword").value
 
//  if(!name || !email || !password){
//     alert('Fill the form')
//     return
//  }

//  const checking = JSON.parse(localStorage.getItem("saveData")) || []
//  const datas = {name,email,password} 
//  checking.push(datas)
 
//  localStorage.setItem("saveData",JSON.stringify(checking))
// alert('Successfully Added')
// fromData.reset()

// })





const loginData = document.getElementById("bnt")

loginData.addEventListener("click",(e)=>{
e.preventDefault()
 
 const email = document.getElementById("useremail").value
 const password = document.getElementById("userpassword").value
 
 if(!email || !password){
    alert('Fill the form')
    return
 }

 const checking = JSON.parse(localStorage.getItem("saveData")) || []

 console.log(checking);
 
 const checkData = checking.find((e)=>e.email==email && e.password==password)

 if(checkData){

   const isActive = {status:true}
   const changeData = JSON.stringify(isActive)
   localStorage.setItem("isActive",changeData)
   localStorage.setItem("userData",JSON.stringify(checkData))
 
   window.location.href = "dashboard.html"

  return
  
 }else{
    alert("Wrong Datas try correct datas")
 }

})




