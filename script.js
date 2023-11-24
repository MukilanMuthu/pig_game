'use strict';
 

const player0Section = document.querySelector('.player--0');
const player1Section = document.querySelector('.player--1');
let active = document.querySelector('.player--active');
let playerScore = active.querySelector('.score');
let playerCurrent = active.querySelector('.current-score');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const newGameButton = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');

// before the game begins
player0Section.querySelector('.score').textContent = 0;
player1Section.querySelector('.score').textContent = 0;
player1Section.querySelector('.current-score').textContent = 0;
player1Section.querySelector('.current-score').textContent = 0;
dice.classList.add('hidden');

function switcher(){
    playerCurrent.textContent = 0;
    if (player0Section.classList.contains('player--active')){
        player1Section.classList.add('player--active');
        player0Section.classList.remove('player--active');
        playerScore = document.getElementById('score--1');
        playerCurrent = document.getElementById('current--1');
    } else if(player1Section.classList.contains('player--active')){
        player0Section.classList.add('player--active');
        player1Section.classList.remove('player--active');
        playerScore = document.getElementById('score--0');
        playerCurrent = document.getElementById('current--0');
    }
}

function roll(){
    if (Number(playerScore.textContent) < 100){
        let diceNumber = Math.trunc(Math.random() * 6) + 1;
        dice.src = `./img/dice-${diceNumber}.png`;
        dice.classList.remove('hidden');
        if (diceNumber ===1){
            switcher();
        } else {
            let score = Number(playerCurrent.textContent);
            score += diceNumber;
            playerCurrent.textContent = score;
        }
    }
}

function hold(){
    let score = Number(playerScore.textContent);
    if (score<100){
        let current = Number(playerCurrent.textContent);
        score += current;
        playerScore.textContent =score;
        if (score>=100){
            if (player0Section.classList.contains('player--active')){
                player0Section.classList.add('player--winner');
            }else if(player1Section.classList.contains('player--active')){
                player1Section.classList.add('player--winner');
            }
        } else {
            playerCurrent.textContent = 0;
            switcher();
        }
    }
}

function newGame(){
    if (player0Section.classList.contains('player--winner')){
        player0Section.classList.remove('player--winner');
    }else if(player1Section.classList.contains('player--winner')){
        player1Section.classList.remove('player--winner');
    }
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    if(player1Section.classList.contains('player--active')){
        player0Section.classList.add('player--active');
        player1Section.classList.remove('player--active');
    }
    playerScore = document.getElementById('score--0');
    playerCurrent = document.getElementById('current--0');
}

rollButton.addEventListener('click', roll);
holdButton.addEventListener('click', hold);
newGameButton.addEventListener('click', newGame);
