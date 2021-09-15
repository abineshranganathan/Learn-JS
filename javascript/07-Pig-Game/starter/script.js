'use strict';
// selecting elements
const scoreP0 = document.getElementById('score--0');
const scoreP1 = document.getElementById('score--1');
const diceImg = document.querySelector('.dice');
const currentScoreP0 = document.getElementById('current--0')
const currentScoreP1 = document.getElementById('current--1')
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');


//starting contition
let  scores, currentScore, activePlayer, playing;

const init = function(){
    scoreP0.textContent = 0;
    scoreP1.textContent = 0;
    currentScoreP0.textContent = 0;
    currentScoreP1.textContent = 0;
    diceImg.classList.add('hidden');

    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');

};

init();  

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
} 

// rolling dice functionality
btnRoll.addEventListener('click', function(){
    if(playing){
     
    // generate random dice roll
    const dice = Math.trunc(Math.random()*6)+1;

    //display dice
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${dice}.png`;

    //check for rolled 1
    if(dice !== 1){

        //add dice to currrern score
        currentScore  += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
        // switched to another player
        switchPlayer();
    }   
    }
});

btnHold.addEventListener('click', function(){
    // add current score to total score active players
    if(playing){
        scores[activePlayer] += currentScore; 
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];


    if(scores[activePlayer] >= 20){
        // finesh the game
        playing = false;
        diceImg.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    }
    switchPlayer();
    }
});

btnNew.addEventListener('click', init);




