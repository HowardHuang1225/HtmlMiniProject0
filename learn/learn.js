let num = document.getElementById("countnum")
let prenum = document.getElementById("pre");
let x=0;
let prev = 0;

let text ="previos num: "

function add(){
    x+=1;
    num.innerText=x;
}


function reset(){
    // prenum.textContent += x +"-"
    prenum.innerText += x +"-"
    num.innerText=0
    prev=x
    x=0
}



function error(){
    document.getElementById("error").style.display="block";
    document.getElementById("error").style.color="red";
}