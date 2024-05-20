var hitrn=0;
function makeBubble(){
var clutter="";

for(var i=0;i<120;i++){
    var rn = Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">
    ${rn}
</div>`;
}
document.querySelector("#pbottom").innerHTML = clutter;
}
var score= 0;
function IncreaseScore(){
    score +=10;
    document.querySelector("#score").textContent = score
}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
var timer=60;
function runTimer(){
    var timerint = setInterval(function(){
        if(timer >0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML = `<h1 align="center">Game Over</h1>`;
        }
    },1000);
}
document.querySelector("#pbottom").addEventListener("click",function(details){
    var clickednum = Number(details.target.textContent);
    if(hitrn == clickednum){
        IncreaseScore();
        getNewHit();
    }
});
runTimer();
makeBubble();
getNewHit();

