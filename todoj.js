let input=document.querySelector("#input");
let listoftasks=document.querySelector("#listoftasks");
function add(){
if(input.value === ""){
    alert("Enter some taks");
}else{
    let li=document.createElement("li");
    li.innerHTML=input.value;
    
    let span=document.createElement("span");
    span.innerHTML="X";
    span.onclick=function(){
        listoftasks.removeChild(li)
    };
    li.appendChild(span);
    listoftasks.appendChild(li);
}
    input.value="";
}
