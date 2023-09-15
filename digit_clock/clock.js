const week = ["SUN","MON","TUE","WED","THR","FRI","SAT"];

function updateclock(){
    var now = new Date();

    document.getElementById("date").innerText =
    now.getFullYear()+"-"+zeropadding(now.getMonth()+1,2)+"-"+zeropadding(now.getDate(),2)+" "+week[now.getDay()];

    document.getElementById("time").innerText =
    zeropadding(now.getHours(),2)+":"+zeropadding(now.getMinutes(),2)+":"+zeropadding(now.getSeconds(),2);

}

updateclock();

setInterval(updateclock,"1s");

function zeropadding(num,digit){
    return String(num).padStart(digit,"0");
}


let frame = document.getElementById("clockframe");
let date = document.getElementById("date");
let time = document.getElementById("time");
let body = document.getElementById("body");

var ok=1;


function clickinput(){
    alert("輸入格式=> 12:22:10 注意(分)和(秒)不要超出 60 !!!");
}


frame.addEventListener("click",function (){
    if(ok){
        frame.style.backgroundImage = "url('./morning.jpg')";
        ok=0;
        console.log("ddddddd");
        frame.style.color = "black";
        // body.style.backgroundImage = "url('./morning.jpg')";
        frame.style.webkitTextStroke = "1px #fff;";
    }
    else{
        frame.style.backgroundImage = "url('./night.jpg')";
        ok=1;
        console.log("aaaaaaa");
        frame.style.color = "white";
        //body.style.backgroundImage = "url('./night.jpg')";
        frame.style.webkitTextStroke = "1px #000000;";
    }
});






/////////////////////////////////////////////////////////////////////////////////////

var a,b,c;

function setbtn(){
    const val = document.querySelector('#input').value;
    var array = val.split(":");
    a=parseInt(array[0]);
    b=parseInt(array[1]);
    c=parseInt(array[2]);
    console.log(a+b+c);

    document.getElementById("count").innerText = zeropadding(array[0],2) + " : " + zeropadding(array[1],2) + " : "  +zeropadding(array[2],2);
}

var okk=0;
var sss;

function countdown(){
    // console.log(a+b+c);
    if(c==0 && b==0 && a==0){
        alert("Time's up !!!");
        okk=0;
        clearInterval(sss);
        document.getElementById("countbtn").style.display = "block";
        document.getElementById("set").style.display = "block";
        document.getElementById("end").style.display = "none";
    }
    else if(c!=0){
        c-=1;
    }
    else if(b!=0 && c==0){
        c=59;
        b-=1;
    }
    else if(a!=0 && b==0 && c==0){
        a-=1;
        b=59;
        c=59;
    }
    document.getElementById("count").innerText = zeropadding(a,2) + " : " + zeropadding(b,2) + " : "  +zeropadding(c,2);;
}


function start(){
    okk=1;
    console.log(a+b+c);
    sss = setInterval(countdown,1000);
    document.getElementById("set").style.display = "none";
    document.getElementById("countbtn").style.display = "none";
    document.getElementById("end").style.display = "block";
    document.querySelector('#input').value = "";
}


function end(){
    clearInterval(sss);
    document.getElementById("countbtn").style.display = "block";
    document.getElementById("set").style.display = "block";
    document.getElementById("end").style.display = "none";
    document.querySelector('#input').value = "";
}
