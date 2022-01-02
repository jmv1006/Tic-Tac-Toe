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

let boardArray = ['X', 'O', 'X', 'X', 'O', 'O', 'X', 'O', 'X'];

//this assigns each box an individual ID...
let idMaker = 0;
for (i = 0; i < boxes.length; i++) {
    boxes[i].id = idMaker;
    idMaker++;
};


//controls the actual "marking" of Xs and Os on the board...
for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function() {
        switch (currentPlayer) {
            case playerOne:
                this.innerHTML = playerOne.marker;
                switchActivePlayer();
                break;
            case playerTwo:
                this.innerHTML = playerTwo.marker;
                switchActivePlayer();
                break;
        };
    });
};

//switches the active player and populates current player display on DOM
function switchActivePlayer() {
    switch(currentPlayer) {
        case playerOne:
            currentPlayer = playerTwo;
            document.getElementById('currentTurnDisplay').innerHTML = 'Player Two (O)';
            break;
        case playerTwo:
            currentPlayer = playerOne;
            document.getElementById('currentTurnDisplay').innerText = 'Player One (X)';
            break;
    }
};

function gameFlow() {

}
