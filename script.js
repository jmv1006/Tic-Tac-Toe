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
let currentPlayer = playerOne;

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

//overall gameflow..
const gameFlow = {

};


//controls the actual "marking" of Xs and Os on the board...
//changing class to 'taken' allows me to identify which boxes have text in them thus alerting the user if it is clicked
for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function() {
        if (this.className === 'taken') {
            alert('Already Taken!')
        } else {
            switch (currentPlayer) {
                case playerOne:
                    this.innerHTML = playerOne.marker;
                    gameBoard.boardArray.splice(this.id, 1, playerOne.marker);
                    gameFlow(playerOne, this.id);
                    document.getElementById(this.id).setAttribute('data-number',1);
                    switchActivePlayer();
                    break;
                case playerTwo:
                    this.innerHTML = playerTwo.marker;
                    gameBoard.boardArray.splice(this.id, 1, playerTwo.marker);
                    gameFlow(playerTwo, this.id);
                    document.getElementById(this.id).setAttribute('data-number',1);
                    switchActivePlayer();
                    break;
            };
        };
    });
};

//switches the active player and populates current player display on DOM
function switchActivePlayer() {
    switch(currentPlayer) {
        case playerOne:
            currentPlayer = playerTwo;
            document.getElementById('currentTurnDisplay').innerHTML = 'Player Two (O)';
            checkWinner();
            break;
        case playerTwo:
            currentPlayer = playerOne;
            document.getElementById('currentTurnDisplay').innerText = 'Player One (X)';
            checkWinner();
            break;
    }
};

function checkWinner() {
    
}