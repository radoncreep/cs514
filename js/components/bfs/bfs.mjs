import { outputContainer } from "../../containers.mjs";
import { createNodeDisplay } from '../../graphics/mockimation.mjs'

export const breadFirstSearchTraversal = (root) => {
    if (!root) return null;

    let currentNode = root;
    let list = [], queue= [];

    queue.push(currentNode);
    outputContainer.innerHTML = "";

    while (queue.length > 0) {
        currentNode = queue.shift();

        
        createNodeDisplay(currentNode.value)
        list.push(currentNode.value);

        if (currentNode.left) queue.push(currentNode.left);

        if (currentNode.right) queue.push(currentNode.right);
    };

    return list;
}