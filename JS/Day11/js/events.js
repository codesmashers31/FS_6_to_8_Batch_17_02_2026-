const clickable = document.getElementById("btn")

// console.log(img.src);


clickable.addEventListener("click",()=>{
   
const img = document.getElementById("load")

if(img.style.display ===  "none"){


img.style.display =  "block"
console.log(img.style.display);
clickable.innerText = "Stop Loading"

img.src = "img/1.gif"

}else{


clickable.innerText = "Click to start"
img.style.display =  "none"

}



})