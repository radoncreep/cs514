import { outputContainer } from "../../containers.mjs";
import { createNodeDisplay } from "../../graphics/mockimation.mjs";

export const depthFirstSearch = () => {

    outputContainer.innerHTML = "";

    const inOrderTraversal = (root, list) => { // left parent right (nodes)
        if (!root) return null;
        let currentNode = root;
        
        if (currentNode.left) {
            inOrderTraversal(currentNode.left, list);
        };
        
        list.push(currentNode.value);
        createNodeDisplay(currentNode.value);
        
        if (currentNode.right) {
            inOrderTraversal(currentNode.right, list);
        }

        return list;
    }

    const preOrderTraversal = (root, list) => { // parent left right (nodes)
        if (!root) return null;
        let currentNode = root;

        list.push(currentNode.value);
        createNodeDisplay(currentNode.value);

        if (currentNode.left) {
            inOrderTraversal(currentNode.left, list);
        };

        if (currentNode.right) {
            inOrderTraversal(currentNode.right, list);
        };

        return list;
    }

    const postOrderTraversal = (root, list) => { // left right parent (nodes)
        if (!root) return null;
        let currentNode = root;

        if (currentNode.left) {
            inOrderTraversal(currentNode.left, list);
        };

        if (currentNode.right) {
            inOrderTraversal(currentNode.right, list);
        };

        list.push(currentNode.value);
        createNodeDisplay(currentNode.value);

        return list;
    }

    return { 
        inOrderTraversal, 
        preOrderTraversal, 
        postOrderTraversal 
    }
}

// modules are objects that can be reused in other modules
// scripts are files containing program or code that can be executed