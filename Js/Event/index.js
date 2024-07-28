let event=document.querySelector(".btn").addEventListener("click", function hi(){
    document.getElementById("h1").innerHTML="Hi i am changed "
}
);
document.querySelector(".btn").addEventListener("contextmenu", function bye(){
    alert("I am clicked right")
}
);

document.querySelector(".btn").addEventListener("contextmenu", (e)=>{
 console.log(e)   
}
);

