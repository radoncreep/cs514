import { BinarySearchTree } from "./Tree.mjs";
import { breadFirstSearchTraversal } from "./bfs.mjs";
import { 
    bfsButton,
    dfsButton,
    btn,
    emptyBtn,
    formDiv,
    input,
    randomBtn,
    traversalDiv
 } from "./components.mjs";

//  GLOBAL VARIABLES
let tree = new BinarySearchTree();

// STATES
let isCreateVisible = false;
let isTraverseVisible = false;


// UI FUNCTIONALITY
const inputVisible = () => {
    isCreateVisible = !isCreateVisible;

    if (isCreateVisible) {
        formDiv.appendChild(randomBtn);
        formDiv.appendChild(emptyBtn);
    } else {
        formDiv.removeChild(randomBtn);
        formDiv.removeChild(emptyBtn);
    }
}


const handleTraversalUI = () => {
    isTraverseVisible = !isTraverseVisible;

    if (isTraverseVisible) {
        traversalDiv.appendChild(bfsButton);
        traversalDiv.appendChild(dfsButton);
    } else {
        traversalDiv.removeChild(bfsButton);
        traversalDiv.removeChild(dfsButton);
    } 
}

const generateRandomTree = () => {
    let data = [];
    tree = new BinarySearchTree();

    while (data.length <= 8) {
        let randomNum = Math.floor(Math.random() * 20) + 1;
        if (data.indexOf(randomNum) === -1 ) data.push(randomNum);
    };
    // console.log(data);

    data.forEach((elem) => tree.insertNode(elem));

    console.log(JSON.stringify(tree));
}

const generateEmptyTree = () => {
    tree = null;
    console.log(tree)
}

const traversal = () =>  {
    let result = breadFirstSearchTraversal(tree.root);
    console.log(result);
}

// DOM
const submitButton = document.createElement('button');
submitButton.innerHTML = "Submit";

// EVENTS
// submitButton.addEventListener('submit', submitFunc)
btn.addEventListener('click', inputVisible);
randomBtn.addEventListener('click', generateRandomTree);
emptyBtn.addEventListener('click', generateEmptyTree);

// TRAVERSAL BTNS EVENTS
let traversalBtn = document.querySelector('#traversal');
traversalBtn.addEventListener('click', handleTraversalUI);
bfsButton.addEventListener('click', traversal);







// console.log(JSON.stringify(tree.lookup(4)));

// console.log(JSON.stringify(tree));
// const creatButton = d3.selectAll('button').on('click', inputVisible);
// const buttonContainer = d3.select('.choose');

// const tree = new BinarySearchTree();

// tree.insertNode(7);
// tree.insertNode(4);
// tree.insertNode(10);
// tree.insertNode(8);
// tree.insertNode(16);
// tree.insertNode(0);
// tree.insertNode(5);