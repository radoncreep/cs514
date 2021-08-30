import { BinarySearchTree } from "../datastructures/Tree.mjs";
import { breadFirstSearchTraversal } from "../components/bfs/bfs.mjs";
import { 
    btn,
    emptyBtn,
    formDiv,
    randomBtn,
    traversalContainer,
    traversalTab,
    insertBtn,
    insertDiv,
    insertContainer,
    submitInsert,
    insertInput
 } from "../containers.mjs";
import { depthFirstSearch } from "../components/dfs/dfs.mjs";


import { clearCanvas } from "./canvas.mjs";
import { 
    depthLimitedButton,
    dlsContainer,
    dlsSubmitInputElement,
    depthInputElement,
    dlsSearchInputElement,
    dlsForm
} from "../components/dls/dlsComponents.mjs";
import { bfsButton } from "../components/bfs/bfsComponent.mjs";
import { 
    inorderBtn,
    preorderBtn,
    postorderBtn,
    dfsOrderContainer,
    dfsButton
} from "../components/dfs/dfsComponent.mjs";
import { depthLimitedSearch } from '../components/dls/depthLimitedSearch.mjs';
import { iddfsButton } from "../components/iterativeDeepening/iddfsComponent.mjs";
import { iddfsContainer } from "../components/iterativeDeepening/iddfsComponent.mjs";
import { iddfsForm } from "../components/iterativeDeepening/iddfsComponent.mjs";
import { iddfsSubmitInputElement } from "../components/iterativeDeepening/iddfsComponent.mjs";
import { iddfsSearchInputElement } from "../components/iterativeDeepening/iddfsComponent.mjs";
import { iterativeDeepeningSearch } from "../components/iterativeDeepening/iterativeDeepingSearch.mjs";
// import { WeightedGraph } from "../datastructures/WeightedGraph.mjs";
import { graphBtn } from "../containers.mjs";


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
    generateEmptyTree();
    let data = [];
    // let data = [10, 17, 9, 16, 28, 13]
    // let data = [ 8, 5, 17, 4, 20, 15, 18, 11, 13 ]
    // let data = [ 13, 7, 1, 4, 19, 5, 15, 9, 14 ];
    // let data = [ 20, 8, 11, 4, 13, 18, 1, 16, 12 ]
    tree = new BinarySearchTree();

    while (data.length < 5) {
        let randomNum = Math.floor(Math.random() * 20) + 1;
        if (data.indexOf(randomNum) === -1 ) data.push(randomNum);
    };

    data.forEach((elem) => tree.insertNode(elem));

    return tree;
}

// const createWeightedGraph = () => {
//     let wGraph = new WeightedGraph();

//     uniformCostSearch(wGraph);
// }

const generateEmptyTree = () => {
    tree = new BinarySearchTree();
    clearCanvas()
}

// BFS
const traversalBfs = () =>  {
    let result = breadFirstSearchTraversal(tree.root);
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
}

const handlePreOrderTraversal = () =>  {
    let { preOrderTraversal } = depthFirstSearch();
    let result = preOrderTraversal(tree.root, []);
}

const handlePostOrderTraversal = () =>  {
    let { postOrderTraversal } = depthFirstSearch();
    let result = postOrderTraversal(tree.root, []);
}

const handleInsertButton = () => {
    insertContainer.appendChild(insertDiv);
}

const handleInsertValue = () => {
    let nodeValue = insertInput.value;
    
    tree.insertNode(parseInt(nodeValue));
    
    insertInput.value = Math.floor(Math.random() * 20) + 1;
};

// shows form when button is clicked
const handleDlsUI = () => {
    dlsContainer.appendChild(dlsForm);

    dlsSubmitInputElement.addEventListener('click', () => {
        let depthValue = parseInt(depthInputElement.value)    
        let goalNode = parseInt(dlsSearchInputElement.value);
        let depthCount = 0;
        let visited = new Set();
        let stack = [];
    
        let result = depthLimitedSearch(tree.root, goalNode, depthCount, depthValue, visited, stack);
        console.log('DLS ', result)
    });
}

const handleIddfsToggle = () => {
    iddfsContainer.appendChild(iddfsForm);

    /*  we don't need to manually set the depth limit
        as it increases if the goal node isn't found
        thereby expanding current node or the search/state space
        a depth count isn't needed also
    */
    iddfsSubmitInputElement.addEventListener('click', () => {

        let count = 0;
        const getMaxDepth = (root) => {
            if (!root) return 0;

            let left = getMaxDepth(root.left);
            let right = getMaxDepth(root.right);

            // take the max of the left and right child of a node and sum with 1
            let max = Math.max(left, right);
            return max + 1;
        }

        let maxDepth = getMaxDepth(tree.root, count),
            goalNode = parseInt(iddfsSearchInputElement.value);

        let result = iterativeDeepeningSearch(tree.root, goalNode, maxDepth);
        // console.log(result)
    })
}


// DOM
const submitButton = document.createElement('button');
submitButton.innerHTML = "Submit";

// EVENTS
// submitButton.addEventListener('submit', submitFunc)
btn.addEventListener('click', inputVisible);
randomBtn.addEventListener('click', generateRandomTree);
// randomBtn.addEventListener('click', createWeightedGraph);
emptyBtn.addEventListener('click', generateEmptyTree);

// TRAVERSAL BTNS EVENTS
let traversalBtn = document.querySelector('#traversal');
traversalBtn.addEventListener('click', handleTraversalUI);
bfsButton.addEventListener('click', traversalBfs);
dfsButton.addEventListener('click', showDfsTray);
inorderBtn.addEventListener('click', handleInOrderTraversal);
preorderBtn.addEventListener('click', handlePreOrderTraversal);
postorderBtn.addEventListener('click', handlePostOrderTraversal);
insertBtn.addEventListener('click', handleInsertButton);
submitInsert.addEventListener('click', handleInsertValue);

depthLimitedButton.addEventListener('click', handleDlsUI);
iddfsButton.addEventListener('click', handleIddfsToggle);
// graphBtn.addEventListener('click', createWeightedGraph)






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