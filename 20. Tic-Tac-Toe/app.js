const gameBoard = document.querySelector('#game-board');
const info = document.querySelector('.info');
const circle = document.querySelector('.circle');
const cross = document.querySelector('.cross');

const squares = ['','','','','','','','',''];

let go = '';

info.textContent = 'Choose your symbol to play!';

circle.addEventListener('click', chooseSymbol);
cross.addEventListener('click', chooseSymbol);

function chooseSymbol(e){
    go = e.target.classList.value;
    if (go === 'circle'){
        info.textContent = 'You choosed circle!'
        info.style.color = '#fff'
        return;
    }
    info.textContent = 'You choosed cross!'
    info.style.color = '#fff'
    
}


squares.forEach((_cell, index)=>{
    const cellElement = document.createElement('div');
    cellElement.classList.add('square');
    cellElement.id = index;
    cellElement.addEventListener('click', addGo);
    gameBoard.appendChild(cellElement);
   
})

function addGo(e){
    const goDisplay = document.createElement('div');
    if (go !== ''){
        goDisplay.classList.add(go);
        e.target.appendChild(goDisplay);
        go = go === 'circle' ? 'cross' : 'circle';
        info.textContent = `${go.toUpperCase()} turn`;
        e.target.removeEventListener('click', addGo);
        checkScore();
    }else {
        info.style.color = 'red'
    }
    
    
}

function checkScore() {
    const allSquares = document.querySelectorAll('.square');
    const winningCombos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]

    winningCombos.forEach(array => {
        const circleWins = array.every(cell => 
            allSquares[cell].firstChild?.classList.contains('circle'));

            if (circleWins){
                info.textContent = "Circle Wins!";
                info.style.color = 'green';
                array.forEach(index => (
                    allSquares[index].style.backgroundColor = 'green'
                ))
                // allSquares[cell].style.backgroundColor = 'green';
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return;
            }
    })

    winningCombos.forEach(array => {
        const crossWins = array.every(cell => 
            allSquares[cell].firstChild?.classList.contains('cross'));
            if (crossWins){
                info.textContent = "Cross Wins!";
                info.style.color = 'green';
                array.forEach(index => (
                    allSquares[index].style.backgroundColor = 'green'
                ))
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return;
            }
    })
} 


