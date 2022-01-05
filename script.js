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

//sets playerOne as the default first player


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

function checkWinner(num, currentP) {
   console.log(num, currentP);
   let currentP = playerOne;

   switch(currentP) {
       case('playerOne'):
        //
   }
};


//controls the actual "marking" of Xs and Os on the board...
//changing class to 'taken' allows me to identify which boxes have text in them thus alerting the user if it is clicked
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
                    gameBoard.boardArray.splice(this.id, 1, 'X');
                    document.getElementById(this.id).setAttribute('data-number',1);
                    switchActivePlayer();
                    checkWinner(this.id, 'playerOne');
                    break;
                case playerTwo:
                    this.innerHTML = playerTwo.marker;
                    gameBoard.boardArray.splice(this.id, 1, 'O');
                    document.getElementById(this.id).setAttribute('data-number',2);
                    switchActivePlayer();
                    checkWinner(this.id, 'playerTwo');
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