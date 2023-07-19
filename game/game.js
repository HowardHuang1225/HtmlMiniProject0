var dino = document.getElementById('dino');
var cactus = document.getElementById('cactus');
var clickstart = document.getElementById('clickstart');

var maxhi=0;

function jump(){
    if(dino.classList!="animation"){
        dino.classList.add("animation");
    }

    setTimeout(function(){
        dino.classList.remove("animation");
    },650);
}


function start(){
    if(cactus.classList!="move0"){
        cactus.classList.add("move0");
        ok=true;
        clickstart.style.display="none";
        cactus.style.animationDuration='2.5s'
        speed=2.5;
    }
}

var checkDead = setInterval(function(){
    var dinotop =
        parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

        var cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

        if(cactusleft<148 && cactusleft>77 && dinotop>=131){
            cactus.classList.remove("move0");
            //dino.style.backgroundImage="../img/dino.png"
            ok=false;
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
        }
        cactus.style.animationDuration=speed+'s';
        console.log("cdcdcdc");
    }

    document.getElementById("countup").innerText =time;
},50)
