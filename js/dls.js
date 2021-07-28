export const depthLimitedSearch = (root, goalNode = 17, depth=0, limit=2, visited = new Set(), stack = []) => {

    if (!root) return null;
  
    stack.push(root);
    
    visited[root.value] = true;

    while (stack.length > 0) {
        if (depth <= limit) {
            let currentNode = stack.pop();
         
            if (currentNode.value === goalNode) {
                return currentNode;
            } else {
                visited[currentNode.value];

                if (currentNode.left) stack.push(currentNode.left);

                if (currentNode.right) stack.push(currentNode.right);

                depth++;
            }
        } else {
            return 'goal node not found';
        }
    }

    return 'goal node not found'
}