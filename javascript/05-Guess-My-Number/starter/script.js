'use strict';
let secterNum = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}
const displayNumber = function(number){
    document.querySelector('.number').textContent = number;
}
const displayNumberWidth = function(number){
    document.querySelector('.number').style.width = number;
}
const displayBodyColor = function(body){
    document.querySelector('body').style.backgroundColor = body;
}
const dispalyScore = function(newScore){
    document.querySelector('.score').textContent = newScore;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        displayMessage('❌No Number !');
    }else 
    if(guess === secterNum){
        displayMessage('Correct Answer 🎉');
        displayNumber(secterNum);
        displayBodyColor('#41df11');
        displayNumberWidth('30rem');

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess !== secterNum){
        if(score > 1){
            displayMessage( guess > secterNum ? 'Too High...!' : 'Too Low...!');
            score--;
            dispalyScore(score);
        }else{
            displayMessage (" ☹ You Loss");
            dispalyScore (0);
        }  
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    displayMessage('Start guessing');
    dispalyScore(score);
    document.querySelector('.guess').value = null;
    secterNum = Math.trunc(Math.random()*20)+1;
    displayNumber( '?');
    displayBodyColor('#222'); 
    displayNumberWidth('15rem');

});