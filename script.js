const button = document.getElementById("btn")
const info = document.getElementById("info")
info.style.display = "none";
button.addEventListener("click",(event)=>{
    if(info.style.display == "none"){
        info.style.display = "block";
    }else{
        info.style.display = "none";
    }
})


