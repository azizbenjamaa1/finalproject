let heart=document.getElementsByClassName("heart_btn")
for(let index=0;index < heart.length;index++) {
    heart[index].addEventListener("click",function(){
        if(heart[index].style.color==="black"){
            heart[index].style.color="red"
        }
        else{
            heart[index].style.color="black"
        }
    })
}