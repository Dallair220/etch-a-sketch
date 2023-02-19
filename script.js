const container = document.querySelector('.container');

const row = [];
const square = [];
const boxes = prompt('how many');
for(let i = 0; i < boxes; i++){
    row[i] = document.createElement('div');
    row[i].classList.add('row');

    for(let j = 0; j < boxes; j++){
        square[j] = document.createElement('div');
        square[j].classList.add('square');
        row[i].appendChild(square[j]);
    }

    container.appendChild(row[i]);
}

// // Row 1
// const row1 = document.createElement('div');
// row1.classList.add('row');

// const square1 = document.createElement('div');
// square1.classList.add('square');
// row1.appendChild(square1);

// const square2 = document.createElement('div');
// square2.classList.add('square');
// row1.appendChild(square2);

// const square5 = document.createElement('div');
// square5.classList.add('square');
// row1.appendChild(square5);

// container.appendChild(row1);

// // Row 2
// const row2 = document.createElement('div');
// row2.classList.add('row');

// const square3 = document.createElement('div');
// square3.classList.add('square');
// row2.appendChild(square3);

// const square4 = document.createElement('div');
// square4.classList.add('square');
// row2.appendChild(square4);

// const square6 = document.createElement('div');
// square6.classList.add('square');
// row2.appendChild(square6);

// container.appendChild(row2);

// // Row 3
// const row3 = document.createElement('div');
// row3.classList.add('row');

// const square7 = document.createElement('div');
// square7.classList.add('square');
// row3.appendChild(square7);

// const square8 = document.createElement('div');
// square8.classList.add('square');
// row3.appendChild(square8);

// const square9 = document.createElement('div');
// square9.classList.add('square');
// row3.appendChild(square9);

// container.appendChild(row3);
