let dfsOrderContainer = document.createElement('div');
dfsOrderContainer.setAttribute('id', 'dfs-order-container');
dfsOrderContainer.setAttribute('style', 'display: flex; align-items: flex-end');

let dfsButton = document.createElement('button');
dfsButton.setAttribute('id', 'dfsBtn');
dfsButton.setAttribute('style', 'margin-top: 10px; width: 60px; height: 30px;');
dfsButton.innerHTML = 'DFS';


let dfsDiv = document.createElement('div');
dfsDiv.setAttribute('id', 'dfs-div');
dfsDiv.setAttribute('style', 'display: flex;')
dfsDiv.appendChild(dfsButton);
dfsDiv.appendChild(dfsOrderContainer);

// TRAVERSALS CHILDS INORDER PREORDER POSTORDER
let inorderBtn = document.createElement('button');
inorderBtn.innerHTML = "Inorder";

let preorderBtn = document.createElement('button');
preorderBtn.innerHTML = "Preorder";

let postorderBtn = document.createElement('button');
postorderBtn.innerHTML = "PostOrder";


export {
    dfsButton,
    dfsDiv,
    dfsOrderContainer,
    inorderBtn,
    preorderBtn,
    postorderBtn
}