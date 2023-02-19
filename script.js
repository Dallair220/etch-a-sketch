const container = document.querySelector('.container');

userInput();

function userInput(){
    const rows = prompt('How many rows do you want to have? (less than 100)');
    rows < 101 ? createGrid(rows) : userInput();
}

function createGrid(rows){
    const row = [];
    const square = [];

    for(let i = 0; i < rows; i++){
        row[i] = document.createElement('div');
        row[i].classList.add('row');
    
        for(let j = 0; j < rows; j++){
            square[j] = document.createElement('div');
            square[j].classList.add('square');
            row[i].appendChild(square[j]);

            square[j].addEventListener('mouseover', trail);
        }
    
        container.appendChild(row[i]);
    }    
}

function trail(e){
    e.target.style.background = 'blue';
}

