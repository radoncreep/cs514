export const iterativeDeepeningSearch = (currentNode, goalNode, maxDepth) => {

    const searchDepthLimit = (currentNode, goalNode, depth) => {
        console.log('recurse ', currentNode.value)
        if (currentNode.value === goalNode) return currentNode.value;

        if (depth <= 0) return null;

        if (currentNode.left) {
           let left = searchDepthLimit(currentNode.left, goalNode, depth-1);
           if (left) return left;
            
        };

        if (currentNode.right) {
            let right = searchDepthLimit(currentNode.right, goalNode, depth-1)
            if (right) return right;
        }

        return null;
    }
    
    const iddfsRecur = (currentNode, goalNode, maxDepth) => {
        console.log('current node', currentNode)
        for (let currentDepth=0; currentDepth <= maxDepth; currentDepth++) {
            console.log('current depth', currentDepth)
            let res = searchDepthLimit(currentNode, goalNode, currentDepth)
            console.log('res', res);
            if (res) {
                return res;
            }
        }

        return false;
    }

    return iddfsRecur(currentNode, goalNode, maxDepth);
}
