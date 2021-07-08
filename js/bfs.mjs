class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    };
}

class BinarySearchTree {
    constructor(root=null) {
        this.root = root;
    };

    insertNode(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        }
        else {
            let currentNode = this.root;

            if (value < this.root.value) {
                while (currentNode.left) {
                    currentNode = currentNode.left;
                };
                currentNode.left = newNode;
            }

            if (value > this.root.value) {
                while (currentNode.right) {
                    currentNode = currentNode.right;
                };
                currentNode.right = newNode;
            }
        }
    }

    deleteNode(value) {

    }

    breadthFirstSearchTraversal() {

    }

    depthFirstSearchTraversal() {

    }
};

export { BinarySearchTree }