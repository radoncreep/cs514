import { BinarySearchTree } from "./Tree.mjs";

const tree = new BinarySearchTree();

tree.insertNode(7);
tree.insertNode(4);
tree.insertNode(10);
tree.insertNode(8);
tree.insertNode(16);
tree.insertNode(0);
tree.insertNode(5);

const creatButton = d3.selectAll('button').on('click', inputVisible);
const buttonContainer = d3.select('.choose');

let inputStyle = {
    // width: '20px',
    // height: '40px'
}
function inputVisible() {
    buttonContainer
        .append('input')
}

// console.log(JSON.stringify(tree.lookup(4)));

// console.log(JSON.stringify(tree));