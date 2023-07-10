const gameBoard = document.querySelector('#game-board');
const info = document.querySelector('.info');

const squares = ['','','','','','','','',''];

let go = 'circle';

info.textContent = 'CIRCLE goes first';

squares.forEach((_cell, index)=>{
    const cellElement = document.createElement('div');
    cellElement.classList.add('square');
    cellElement.id = index;
    cellElement.addEventListener('click', addGo);
    gameBoard.appendChild(cellElement);
   
})


function addGo(e){
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(go);
    e.target.appendChild(goDisplay);
    go = go === 'circle' ? 'cross' : 'circle';
    info.textContent = `it is now ${go}'s go.`;
    e.target.removeEventListener('click', addGo);
    checkScore();
}

function checkScore() {
    
}