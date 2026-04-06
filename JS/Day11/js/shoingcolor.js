const redbtn = document.getElementById("redbtn")
const yellowbtn = document.getElementById("yellowbtn")
const greenbtn = document.getElementById("greenbtn")


const box = document.getElementById("box")


redbtn.addEventListener("click",()=>{

    box.style.backgroundColor = "red"
    box.innerHTML = "red"


})

yellowbtn.addEventListener("click",()=>{

    box.style.backgroundColor = "yellow"
    box.innerHTML = "Padding"


})

greenbtn.addEventListener("click",()=>{

    box.style.backgroundColor = "green"
    box.innerHTML = "Start"


})