'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1
let score = 20
let highscore = 0

let displayMessage = function(message){
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if(!guess){
        displayMessage('⛔ No Number!')
    } 

    // When Player wins
    else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!')
        
        document.querySelector('.number').textContent = secretNumber

        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number').style.width = '30rem'

        if(score > highscore){
            document.querySelector('.highscore').textContent = score
        }
    }

    // When guess is different
    else if(guess !== secretNumber){
        if(score>1) {
            displayMessage(guess > secretNumber ?  '📈 Too High!' : '📉 Too Low!')
            score--
            document.querySelector('.score').textContent = score
        }
        else{
            displayMessage('😢 You Lost the game!')
            document.querySelector('.score').textContent = 0
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score  = 20
    secretNumber = Math.trunc(Math.random()*20)+1
    document.querySelector('.number').textContent = secretNumber

    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('body').style.backgroundColor = '#222'
})