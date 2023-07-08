let playerScore = 0;
let aiScore = 0;
const playerScore_span = document.getElementById('player-score');
const aiScore_span = document.getElementById('ai-score');
const gameComment_div = document.querySelector('.game-comment');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const player_span = document.querySelector('.player');
const ai_span = document.querySelector('.ai');
const resetButton = document.querySelector('.reset-button');

//Generating Ai Choices
function getAiChoice(){
    const rps = ['rock','paper','scissors'];
    return rps[Math.floor(Math.random()*3)];
}

function game(playerChoice){
    const aiChoice = getAiChoice();

    switch(aiChoice + playerChoice){
        case 'rockpaper':
        case 'scissorsrock':
        case 'paperscissors':
            win(playerChoice, aiChoice)
            break;
        case 'paperrock':
        case 'rockscissors':
        case 'scissorspaper':
            lose(playerChoice, aiChoice)
            break;
        default:
            draw(playerChoice, aiChoice)
    }
}

function win(playerChoice, aiChoice){
    playerScore++;
    playerScore_span.textContent = playerScore;
    gameComment_div.textContent = 'You WIN';
    gameComment_div.style.color = 'green';
    player_span.src = `img/${playerChoice}.png`;
    ai_span.src = `img/${aiChoice}.png`;
    gameReset()
}

function lose(playerChoice, aiChoice){
    aiScore++;
    aiScore_span.textContent = aiScore;
    gameComment_div.textContent = 'You LOST';
    gameComment_div.style.color = 'red';
    player_span.src = `img/${playerChoice}.png`;
    ai_span.src = `img/${aiChoice}.png`;
    gameReset()
}

function draw(playerChoice, aiChoice){
    gameComment_div.textContent = 'DRAW';
    gameComment_div.style.color = 'orange';
    player_span.src = `img/${playerChoice}.png`;
    ai_span.src = `img/${aiChoice}.png`;
}

function gameReset(){
    
    if(playerScore > 0 || aiScore > 0)
    resetButton.classList.remove('button-display');
    resetButton.addEventListener('click', ()=>{
    gameComment_div.textContent = 'Game Reset! You want to play again ?';
    gameComment_div.style.color = '#fff';
    player_span.src = ``;
    ai_span.src = ``;
    playerScore = 0;
    aiScore = 0;
    playerScore_span.textContent = '0';
    aiScore_span.textContent = '0';

    resetButton.classList.add('button-display');
    })
}

//Main Function
function main() {
    resetButton.classList.add('button-display');
   
    rock.addEventListener('click', function(){
    game('rock');
    })
    paper.addEventListener('click', function(){
    game('paper');
    })
    scissors.addEventListener('click', function(){
    game('scissors');
    })
}

main();