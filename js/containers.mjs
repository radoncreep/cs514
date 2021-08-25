import { bfsButton } from "./components/bfs/bfsComponent.mjs";
import { dfsDiv } from "./components/dfs/dfsComponent.mjs";
import { dlsContainer } from "./components/dls/dlsComponents.mjs";
import { iddfsContainer } from "./components/iterativeDeepening/iddfsComponent.mjs";

let btn = document.querySelector('#create');
let formDiv = document.querySelector('.choose');
let input = document.createElement('input');

// INPUTS DIV
let insertInput = document.createElement('input');
insertInput.setAttribute('style', 'margin-left: 10px');
insertInput.setAttribute('type', 'number');
insertInput.setAttribute('value', 10);
let submitInsert = document.createElement('button');
submitInsert.innerHTML = 'Submit';
let insertDiv = document.createElement('div');
insertDiv.setAttribute('style', 'display: flex; backround-color: red;');
insertDiv.appendChild(insertInput);
insertDiv.appendChild(submitInsert);

// BUTTONS
let submitButton = document.createElement('button');

let randomBtn =  document.createElement('button');
randomBtn.innerHTML = "Random";
randomBtn.setAttribute('id', 'rndBtn');

let emptyBtn =  document.createElement('button');
emptyBtn.innerHTML = "Empty";

let insertBtn = document.getElementById('insert-input');


let traversalTab = document.createElement('div');
traversalTab.setAttribute('id', 'traversal-selection-tab');
// traversalTab.setAttribute('style',  "background-color: red;");
traversalTab.style = 
    "display: flex; flex-direction: column; height: 250px; width: 100%;"
traversalTab.appendChild(bfsButton);
traversalTab.appendChild(dfsDiv);
traversalTab.appendChild(dlsContainer);
traversalTab.appendChild(iddfsContainer);


let traversalContainer = document.querySelector('.traversal-container');
let insertContainer = document.querySelector('.insert-container');

let outputContainer = document.querySelector('.output-display');
outputContainer.setAttribute('style', 'display: flex; flex-direction: row; width: inherit; justify-content: space-around');

let outputDiv = document.querySelector('.output');
outputDiv.appendChild(outputContainer);

export {
    btn,
    emptyBtn,
    formDiv,
    input,
    insertBtn,
    insertContainer,
    insertDiv,
    insertInput,
    outputContainer,
    randomBtn,
    submitButton,
    submitInsert,
    traversalContainer,
    traversalTab
}


