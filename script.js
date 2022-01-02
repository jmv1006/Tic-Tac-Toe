const boardContainer = document.getElementById('boardcont');
let boxes = document.querySelectorAll('.markercont');
let currentLetter = 'X';

const playerOne = {
    name: 'User',
    marker: 'X'
};

const playerTwo = {
    name: 'Computer',
    marker: 'O'
};

let boardArray = ['X', 'O', 'X', 'X', 'O', 'O', 'X', 'O', 'X'];

for (i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = boardArray[i];
    /*
    boxes[i].addEventListener('click', function() {
        this.innerHTML = boardArray[i];
    })
    */
};



