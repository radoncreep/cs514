import { bfsButton } from "./components/bfs/bfsComponent.mjs";
import { dlsContainer } from "./components/dls/dlsComponents.mjs";

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

// TRAVERSALS CHILDS INORDER PREORDER POSTORDER
let inorderBtn = document.createElement('button');
inorderBtn.innerHTML = "Inorder"
let preorderBtn = document.createElement('button');
preorderBtn.innerHTML = "Preorder"

let postorderBtn = document.createElement('button');
postorderBtn.innerHTML = "PostOrder";

let dfsOrderContainer = document.createElement('div');
dfsOrderContainer.setAttribute('id', 'dfs-order-container');
dfsOrderContainer.setAttribute('style', 'display: flex; align-items: flex-end');

let insertBtn = document.getElementById('insert-input');


// TRAVERSALS DOM


let dfsButton = document.createElement('button');
dfsButton.setAttribute('id', 'dfsBtn');
dfsButton.setAttribute('style', 'margin-top: 10px; width: 60px; height: 30px;');
dfsButton.innerHTML = 'DFS';


let dfsDiv = document.createElement('div');
dfsDiv.setAttribute('id', 'dfs-div');
dfsDiv.setAttribute('style', 'display: flex;')
dfsDiv.appendChild(dfsButton);
dfsDiv.appendChild(dfsOrderContainer);




let traversalTab = document.createElement('div');
traversalTab.setAttribute('id', 'traversal-selection-tab');
// traversalTab.setAttribute('style',  "background-color: red;");
traversalTab.style = 
    "display: flex; flex-direction: column; height: 250px; width: 100%;"
traversalTab.appendChild(bfsButton);
traversalTab.appendChild(dfsDiv);
traversalTab.appendChild(dlsContainer);


let traversalContainer = document.querySelector('.traversal-container');
let insertContainer = document.querySelector('.insert-container');

let outputContainer = document.querySelector('.output-display');
outputContainer.setAttribute('style', 'display: flex; flex-direction: row; width: inherit; justify-content: space-around');

let outputDiv = document.querySelector('.output');
outputDiv.appendChild(outputContainer);

export {
    btn,
    dfsButton,
    dfsOrderContainer,
    emptyBtn,
    formDiv,
    input,
    insertBtn,
    insertContainer,
    insertDiv,
    insertInput,
    inorderBtn,
    outputContainer,
    preorderBtn,
    postorderBtn,
    randomBtn,
    submitButton,
    submitInsert,
    traversalContainer,
    traversalTab
}


