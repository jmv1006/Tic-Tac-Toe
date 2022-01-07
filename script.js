const boardContainer = document.getElementById('boardcont');
let boxes = document.querySelectorAll('.markercont');

const playerOne = {
    name: 'Player One',
    marker: 'X'
};

const playerTwo = {
    name: 'Player Two',
    marker: 'O'
};

//gameboard object
const gameBoard = {
    boardArray: [0,0,0,0,0,0,0,0,0]
};

//this assigns each box an individual ID...
let idMaker = 0;
for (i = 0; i < boxes.length; i++) {
    boxes[i].id = idMaker;
    idMaker++;
};

//overall gameflow..
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
];

const gameFlow = {
    currentPlayer: playerOne,
}

function checkWinner() {
    for (i = 0; i < winningCombos.length; i++) {
       console.log(winningCombos[i][2])
    };


   if (gameBoard.boardArray[0] + gameBoard.boardArray[1] + gameBoard.boardArray[2] === 3) {
       console.log('x wins');
   }
};


//controls the actual "marking" of Xs and Os on the board...
for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function() {
        if (this.getAttribute('data-number') == 1) {
            alert('Already Taken!')
        } else if (this.getAttribute('data-number') == 2) {
            alert('Already Taken!');
        } else {
            switch (gameFlow.currentPlayer) {
                case playerOne:
                    this.innerHTML = playerOne.marker;
                    gameBoard.boardArray.splice(this.id, 1, 1);
                    document.getElementById(this.id).setAttribute('data-number',1);
                    switchActivePlayer();
                    checkWinner();
                    break;
                case playerTwo:
                    this.innerHTML = playerTwo.marker;
                    gameBoard.boardArray.splice(this.id, 1, 2);
                    document.getElementById(this.id).setAttribute('data-number',2);
                    switchActivePlayer();
                    checkWinner();
                    break;
            };
        };
    });
};

//switches the active player and populates current player display on DOM
function switchActivePlayer() {
    switch(gameFlow.currentPlayer) {
        case playerOne:
            gameFlow.currentPlayer = playerTwo;
            document.getElementById('currentTurnDisplay').innerHTML = 'Player Two (O)';
            break;
        case playerTwo:
            gameFlow.currentPlayer = playerOne;
            document.getElementById('currentTurnDisplay').innerText = 'Player One (X)';
            break;
    }
};