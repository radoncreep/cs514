export const depthLimitedSearch = (root, goalNode = 17, depthCount, depthValue, visited = new Set(), stack = []) => {

    if (!root) return null;
  
    stack.push(root);
    
    visited[root.value] = true;

    while (stack.length > 0) {
        if (depthCount <= depthValue) {
            let currentNode = stack.pop();
         
            if (currentNode.value === goalNode) {
                console.log('goal node found')
                return currentNode;
            } else {
                visited[currentNode.value];

                if (currentNode.left) stack.push(currentNode.left);

                if (currentNode.right) stack.push(currentNode.right);

                depthCount++;
            }
        } else {
            return 'goal node not found';
        }
        console.log('visited ', visited)
    }

    return 'goal node not found'
}
