class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    };
}

export class BinarySearchTree {
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

            while (true) { // loops till new node is inserted and a return statement is exectuted
                if (value < currentNode.value) {
                    if (currentNode.left === null) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left; // keep track of current node
                };

                if (value > currentNode.value) {
                    if (currentNode.right === null) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) return null;

        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode.value) {
                return currentNode
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        };

        return null; // if non-existing value is looked up
    }

    deleteNode(value) {
        
    }
};

//         9
//     4       20
// 