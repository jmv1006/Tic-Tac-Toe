const boardContainer = document.getElementById('boardcont');


const playerOne = {
    name: 'User',
    marker: 'X'
};

const playerTwo = {
    name: 'Computer',
    marker: 'O'
};

let boardArray = ['X', 'O', 'X', 'X'];

function generateBoard() {
    for(i = 0; i < 9; i++) {
        const newDiv = document.createElement('div');
        boardContainer.appendChild(newDiv).className = 'markerCont';   
    };
};

generateBoard();