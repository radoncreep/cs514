import { outputContainer } from "../../containers.mjs";
import { createNodeDisplay } from '../../graphics/mockimation.mjs';

export const depthLimitedSearch = (root, goalNode = 17, depthCount, depthValue, visited = new Set(), stack = []) => {

    outputContainer.innerHTML = "";
  
    if (!root) return null;
  
    stack.push(root);
    
    visited[root.value] = true;

    while (stack.length > 0) {
        if (depthCount <= depthValue) {
            let len = stack.length;
            
            
            for (let i=0; i < len; i++) {
                console.log(stack)
                let currentNode = stack.pop();
                console.log(currentNode.value)

                if (currentNode.value === goalNode) {
                    createNodeDisplay(currentNode.value, 'goal node found')
                    return currentNode;
                } else {
                    visited[currentNode.value];
    
                    if (currentNode.left) stack.push(currentNode.left);
    
                    if (currentNode.right) stack.push(currentNode.right);
    
                }
            }
            depthCount++;
         
        } else {
            createNodeDisplay(null, 'goal node not found')
            return 
        }
    }

    createNodeDisplay(null, 'goal node not found')
    return;
}
