let btn = document.querySelector('#create');
let formDiv = document.querySelector('.choose');
let input = document.createElement('input');

// BUTTONS
let submitButton = document.createElement('button');

let randomBtn =  document.createElement('button');
randomBtn.innerHTML = "Random";
randomBtn.setAttribute('id', 'rndBtn');

let emptyBtn =  document.createElement('button');
emptyBtn.innerHTML = "Empty";

let bfsButton = document.createElement('button')
bfsButton.setAttribute('id', 'bfsBtn');
bfsButton.innerHTML = 'BFS';
console.log(bfsButton)

let dfsButton = document.createElement('button')
dfsButton.setAttribute('id', 'dfsBtn');;
dfsButton.innerHTML = 'DFS';

let traversalDiv = document.querySelector('.traversal-container');


export {
    bfsButton,
    btn,
    dfsButton,
    emptyBtn,
    formDiv,
    input,
    randomBtn,
    submitButton,
    traversalDiv
}


