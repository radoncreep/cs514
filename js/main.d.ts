class Node {
    value: number;
    constructor(value: number, left?: null, right?: null) {
        this.value = value
    }
}

class BinaryTree {
    root?: number;

    constructor(root) {
        this.root =root;
    }

    insert(value: number) {
        let root = new Node(value);
    }
}


class Operations {
    generateEmptyTree(value: BinaryTree) {

    }
}

let op = new Operations();
op.generateEmptyTree({ x: 5 })