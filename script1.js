audio = new Audio('resources/Jump.wav');
audiogo = new Audio('resources/GameOver.wav');

var mario = document.getElementById("mario");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(mario.classList == "animate"){return}
    mario.classList.add("animate");
    audio.play();
    setTimeout(function(){
        mario.classList.remove("animate");
       // audio.pause();
    },300);//jump speed
}
var checkDead = setInterval(function() {
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && marioTop>=130){
        block.style.animation = "none";
        audiogo.play();
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = "Your Score: " + Math.floor(counter/100);
    }
}, 10);