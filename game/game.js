var dino = document.getElementById('dino');
var cactus = document.getElementById('cactus');
var clickstart = document.getElementById('clickstart');
var bird=document.getElementById('bird');

var cloud =document.getElementsByTagName('span');


const audio = document.createElement("audio");
const audio1 = document.createElement("audio");
const audio2 = document.createElement("audio");
const audio3 = document.createElement("audio");


var maxhi=0;

function jump(e){
    if(dino.classList!="animation"){
        dino.classList.add("animation");
        audio.src = "../img/jumpeffect.mp3";
        audio.play();
    }


    setTimeout(function(){
        dino.classList.remove("animation");
    },650);
}


function start(){
    audio3.src = "../img/startsound.wav";
    audio3.play();
    if(cactus.classList!="move0"){
        cactus.classList.add("move0");
        ok=true;
        clickstart.style.display="none";
        cactus.style.animationDuration='2.5s'
        speed=2.5;
    }
    if(bird.classList!="move1"){
        bird.classList.add("move1"); 
    }

    audio1.src = "../img/bgm.mp3";
    audio1.volume=0.5;
    audio1.play();
}

var checkDead = setInterval(function(){
    var dinotop =
        parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

        var cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
        var birdleft = parseInt(window.getComputedStyle(bird).getPropertyValue("left"));
        //var birdtop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
        if((cactusleft<148 && cactusleft>77 && dinotop>=131)  ||(birdleft<145 && birdleft>63 &&(dinotop<67) )){
            cactus.classList.remove("move0");
            bird.classList.remove("move1");
            //dino.style.backgroundImage="../img/dino.png"
            ok=false;

            audio1.pause();
            audio1.currentTime = 0;

            alert("Game Over!!!\nyour score is: "+time);
            clickstart.style.display ="block"
            



            if(maxhi<time){
                maxhi=time;
                document.getElementById("hi").innerText =maxhi;
            }
            else{
                document.getElementById("hi").innerText =maxhi;
            }
            time=0;
        }
},10);




var ok=false;
var time=0;
var speed=2.5;
var countup=setInterval(function(){
    if(ok){
        time+=1;
    }

    if(time!=0 && time%300==0){
        if(speed>=1){
            speed-=0.5;
            audio2.src = "../img/update.mp3";
            audio2.play();
        }
        cactus.style.animationDuration=speed+'s';
        console.log("cdcdcdc");
    }

    document.getElementById("countup").innerText =time;
},50)
