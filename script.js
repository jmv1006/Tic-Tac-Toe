const boardContainer = document.getElementById('boardcont');
let boxes = document.querySelectorAll('.markercont');

const playerOne = {
    name: 'User',
    marker: 'X'
};

const playerTwo = {
    name: 'Computer',
    marker: 'O'
};

let currentPlayer = playerTwo;
let boardArray = ['X', 'O', 'X', 'X', 'O', 'O', 'X', 'O', 'X'];

//this assigns each box an individual ID...
let idMaker = 0;
for (i = 0; i < boxes.length; i++) {
    boxes[i].id = idMaker;
    idMaker++;
};


function markBoard() {
    for (i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', function() {
            switch (currentPlayer) {
                case playerOne:
                    this.innerHTML = playerOne.marker;
                    break;
                case playerTwo:
                    this.innerHTML = playerTwo.marker;
                    break;
            };
        });
    };
};

markBoard();

