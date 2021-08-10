import { createRootArc } from '../graphics/canvas.mjs';
import { createLeftLine } from '../graphics/canvas.mjs';
import { createRightLine } from '../graphics/canvas.mjs';


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
        this.xAxis = 0;
        this.yAxis = 0;
        this.xDrawToLeft = 0;
        this.yDrawToLeft = 0;
        this.xDrawToRight = 0;
        this.yDrawToRight = 0;
    };

    insertNode(value) {
        this.xAxis = window.innerWidth / 2;
        this.yAxis = 50;
        this.xDrawToLeft = this.xAxis - 100;
        this.yDrawToLeft = 100;
        this.xDrawToRight = this.xAxis + 100;
        this.yDrawToRight = this.yAxis + 200;
        
        const newNode = new Node(value);
        
        if (!this.root) {
            this.root = newNode;
            createRootArc(this.xAxis, this.yAxis, value);
        }
        else {
            let currentNode = this.root;

            while (true) { // loops till new node is inserted and a return statement is exectuted
                if (value < currentNode.value) {
                    this.xDrawToLeft = this.xAxis - 150;
                    this.yDrawToLeft = this.yAxis + 100;

                    if (currentNode.left === null) {
                        currentNode.left = newNode;
                        createLeftLine(this.xAxis, this.yAxis, this.xDrawToLeft, this.yDrawToLeft, value)
                        createRootArc(this.xDrawToLeft, this.yDrawToLeft, value);
                        
                        return this;
                    }
                    this.xAxis = this.xDrawToLeft;
                    this.yAxis = this.yDrawToLeft;

                    currentNode = currentNode.left; // keep track of current node
                };

                if (value > currentNode.value) {

                    this.xDrawToRight = this.xAxis + 100;
                    this.yDrawToRight = this.yAxis + 100;

                    if (currentNode.right === null) {
                        currentNode.right = newNode;

                        createRightLine(this.xAxis, this.yAxis, this.xDrawToRight, this.yDrawToRight, value);
                        createRootArc(this.xDrawToRight, this.yDrawToRight, value);

                        return this;
                    }

                    this.xAxis = this.xDrawToRight;
                    this.yAxis = this.yDrawToRight;
                    currentNode = currentNode.right;
                }

                if (value === currentNode.value) return;

            }
        }
    }

    deleteNode(value) {
        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode) {
                
            }
        }
    }
};

//         9
//     4       20
// 