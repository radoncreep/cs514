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

// TRAVERSALS CHILDS INORDER PREORDER POSTORDER
let inorderBtn = document.createElement('button');
inorderBtn.innerHTML = "Inorder"
let preorderBtn = document.createElement('button');
preorderBtn.innerHTML = "Preorder"

let postorderBtn = document.createElement('button');
postorderBtn.innerHTML = "PostOrder";

let dfsOrderContainer = document.createElement('div');
dfsOrderContainer.setAttribute('id', 'dfs-order-container');
dfsOrderContainer.setAttribute('style', 'display: flex; align-items: flex-end')


// TRAVERSALS DOM
let bfsButton = document.createElement('button')
bfsButton.setAttribute('id', 'bfsBtn');
bfsButton.setAttribute('style', ' width: 60px; height: 30px;');
bfsButton.innerHTML = 'BFS';

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
traversalTab.setAttribute('style',  "background-color: red;");
traversalTab.style = 
    "display: flex; flex-direction: column; height: 250px; background-color: red; width: 100%;"
traversalTab.appendChild(bfsButton);
traversalTab.appendChild(dfsDiv);



let traversalContainer = document.querySelector('.traversal-container');

export {
    bfsButton,
    btn,
    dfsButton,
    dfsOrderContainer,
    emptyBtn,
    formDiv,
    input,
    inorderBtn,
    preorderBtn,
    postorderBtn,
    randomBtn,
    submitButton,
    traversalContainer,
    traversalTab
}


