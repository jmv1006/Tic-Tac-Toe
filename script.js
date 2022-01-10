const boardContainer = document.getElementById('boardcont');
let boxes = document.querySelectorAll('.markercont');
document.getElementById('currentTurnDisplay').innerHTML = 'Game has not begun!';
let tie;


//<-- Start Game Screen -->
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', function() {
    startGame();
    saveNames();
});

function startGame() {
    document.getElementById('playerNamesModal').style.display = 'none';
    document.getElementById('turnDisplay').style.display = 'flex';
    document.getElementById('interface').style.display = 'flex';
};

function saveNames() {
    playerOne.name = document.getElementById('player1').value;
    playerTwo.name = document.getElementById('player2').value;
};

//player objects
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
    boardArray: ['','','','','','','','','']
};

//this assigns each box an individual ID...
let idMaker = 0;
for (i = 0; i < boxes.length; i++) {
    boxes[i].id = idMaker;
    idMaker++;
};

//possible winning combos
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

//gameflow
const gameFlow = {
    currentPlayer: playerOne,
}

//checks for winner
let a;
let b;
let c;

function check() {
    for (i = 0; i < winningCombos.length; i++) {
        a = winningCombos[i][0];
        b = winningCombos[i][1];
        c = winningCombos[i][2];
        checkWinner(a, b, c);
     };
};

function checkWinner(a, b, c) {
   if (gameBoard.boardArray[a] + gameBoard.boardArray[b] + gameBoard.boardArray[c] === 3) {
       openGameOverModal(playerOne);
   } else if (gameBoard.boardArray[a] + gameBoard.boardArray[b] + gameBoard.boardArray[c] === 6) {
       openGameOverModal(playerTwo);
   } else {
       //do nothing
   }
};

//controls the actual "marking" of Xs and Os on the board...
for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function() {
        if (this.getAttribute('data-number') == 1) {
            document.getElementById('currentTurnDisplay').innerHTML = 'Already Taken!'
        } else if (this.getAttribute('data-number') == 2) {
            document.getElementById('currentTurnDisplay').innerHTML = 'Already Taken!'
        } else {
            switch (gameFlow.currentPlayer) {
                case playerOne:
                    this.innerHTML = playerOne.marker;
                    gameBoard.boardArray.splice(this.id, 1, 1);
                    document.getElementById(this.id).setAttribute('data-number',1);
                    switchActivePlayer();
                    check();
                    checkForTie();
                    break;
                case playerTwo:
                    this.innerHTML = playerTwo.marker;
                    gameBoard.boardArray.splice(this.id, 1, 2);
                    document.getElementById(this.id).setAttribute('data-number',2);
                    switchActivePlayer();
                    check();
                    checkForTie();
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
            document.getElementById('currentTurnDisplay').innerHTML = `${playerTwo.name} (${playerTwo.marker})`;
            break;
        case playerTwo:
            gameFlow.currentPlayer = playerOne;
            document.getElementById('currentTurnDisplay').innerText = `${playerOne.name} (${playerOne.marker})`;
            break;
    }
};

//<-- Code for the AI -->
const Computer = {
    marker: 'O',
    currentBoxChoice: ''
};

//checks for tie
function checkForTie() {
    const isFull = gameBoard.boardArray.every(function(element) {return typeof element === 'number';});
    if (isFull == true) {
        console.log('tie')
        openGameOverModal(tie);
    } else {
        console.log('still not a tie');
    }
};

//Handles what happens when the game ends
function openGameOverModal(winner) {
    document.getElementById('gameOverModal').style.display = 'flex';
    document.getElementById('turnDisplay').style.display = 'none';
    document.getElementById('interface').style.display = 'none';
    switch(winner) {
        case(playerOne):
            document.getElementById('gameOverText').innerHTML = `${playerOne.name} Wins!`;
            break;
        case(playerTwo):
            document.getElementById('gameOverText').innerHTML = `${playerTwo.name} Wins!`;
            break;
        case(tie):
            document.getElementById('gameOverText').innerHTML = `It's a tie!`;
            break;
    }
};

document.getElementById('restartButton').addEventListener('click', function() {
    location.reload();
});

// Changes box color on hover
for (i = 0; i< boxes.length; i++) {
    boxes[i].addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#70c47e';
    })
    boxes[i].addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'white';
    })
}