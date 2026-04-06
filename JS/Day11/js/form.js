
const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    const valueOne = document.getElementById("username")
    const para = document.getElementById("para")

    
    
   if(valueOne.value%2===0)
{
para.innerHTML = "This is Even Number"
}else{
    para.innerHTML = "This is ODD Number"
    para.style.color = "red"
}


})