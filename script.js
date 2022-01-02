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

let boardArray = [];
let boardArrayLength = boardArray.length;


for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function() {
        this.innerHTML = 'min';
    })
};



