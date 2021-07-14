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
    traversalContainer
 } from "./components.mjs";
import { depthFirstSearch } from "./dfs.mjs";
// import { traversalContainer } from "./components.mjs";
import { traversalTab } from "./components.mjs";
import { dfsOrderContainer } from "./components.mjs";
import { inorderBtn } from "./components.mjs";
import { preorderBtn } from "./components.mjs";
import { postorderBtn } from "./components.mjs";
// import { root } from './.mjs';
// import { createRootArc } from './canvas.mjs';

// createRootArc(300, 200)


//  GLOBAL VARIABLES
let tree = new BinarySearchTree();

// STATES
let isCreateVisible = false;
let isTraverseVisible = false;
let isDfsTrayOpen = false;


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
        traversalContainer.appendChild(traversalTab);
    } else {
        traversalContainer.removeChild(traversalTab);
        // traversalContainer.removeChild(dfsButton);
    } 
}

const generateRandomTree = () => {
    let data = [ 13, 7, 1, 4, 19, 5, 15, 9, 14 ];
    // let data = [9, 4, 1, 6, 20, 3, 15, 40, 60, 16];
    tree = new BinarySearchTree();

    // while (data.length <= 8) {
    //     let randomNum = Math.floor(Math.random() * 20) + 1;
    //     if (data.indexOf(randomNum) === -1 ) data.push(randomNum);
    // };
    console.log(data)

    data.forEach((elem) => tree.insertNode(elem));

    console.log(JSON.stringify(tree));

    return tree;
}

const generateEmptyTree = () => {
    tree = new BinarySearchTree();
    console.log(tree)
}

// BFS
const traversalBfs = () =>  {
    let result = breadFirstSearchTraversal(tree.root);
    console.log(result);
}

// DFS
const showDfsTray = () => {
    isDfsTrayOpen = !isDfsTrayOpen;
    let orders = [inorderBtn, preorderBtn, postorderBtn];

    if (isDfsTrayOpen) {
        for (let i=0; i < orders.length; i++) {
            dfsOrderContainer.appendChild(orders[i]);
        };
    } else {
        for (let i=0; i < orders.length; i++) {
            dfsOrderContainer.removeChild(orders[i]);
        };
    }
}

const handleInOrderTraversal = () =>  {
    let { inOrderTraversal } = depthFirstSearch();
    let result = inOrderTraversal(tree.root, []);
    console.log('result list ', result);
}

const handlePreOrderTraversal = () =>  {
    let { preOrderTraversal } = depthFirstSearch();
    let result = preOrderTraversal(tree.root, []);
    console.log('result list ', result);
}

const handlePostOrderTraversal = () =>  {
    let { postOrderTraversal } = depthFirstSearch();
    let result = postOrderTraversal(tree.root, []);
    console.log('result list ', result);
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
bfsButton.addEventListener('click', traversalBfs);
dfsButton.addEventListener('click', showDfsTray);
inorderBtn.addEventListener('click', handleInOrderTraversal);
preorderBtn.addEventListener('click', handlePreOrderTraversal);
postorderBtn.addEventListener('click', handlePostOrderTraversal);






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