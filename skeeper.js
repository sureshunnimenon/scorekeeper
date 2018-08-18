let scoreA = document.querySelector("#scoreA");
let scoreB = document.querySelector("#scoreB");

let maxScore = document.querySelector("#maxScore");
let scoreNum = document.querySelector("#scoreNumber");

let btnA = document.querySelector("#btnA");
let btnB = document.querySelector("#btnB");
let btnReset = document.querySelector("#reset");

var pA, pB, winningScore;
var gameOver = false;

function init(){
    scoreA.textContent = 0;
    scoreB.textContent = 0;
    pA = 0;
    pB = 0;   
    winningScore = 5; 
    gameOver= false;
    maxScore.textContent = 5;
    scoreNum.value = 5;
    scoreA.style.color="black";
    scoreB.style.color="black";
    document.querySelector(".statusGame").textContent="Game Intialized!"
}

document.body.onload = init();

btnA.addEventListener("click", () => {
    if(!gameOver){
        pA++;
        scoreA.textContent = pA;
        if(pA === winningScore){
            console.log('game over');
            document.querySelector(".statusGame").textContent="Game over!"
            gameOver= true;
            scoreA.style.color="green";
        }
    }    
})

btnB.addEventListener("click", () => {
    if(!gameOver){
        pB++;
        scoreB.textContent = pB;
        if(pB === winningScore){
            console.log('game over');
            document.querySelector(".statusGame").textContent="Game over!"
            gameOver= true;
            scoreB.style.color="green";
        }
    }    
})

btnReset.addEventListener("click", init)

scoreNum.addEventListener("change", function(){
    console.log("input clicked");
    maxScore.textContent = scoreNum.value;
    winningScore = Number(scoreNum.value);    
})