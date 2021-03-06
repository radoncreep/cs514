import { createRootArc } from '../graphics/canvas.mjs';
import { createLeftLine } from '../graphics/canvas.mjs';
import { createRightLine } from '../graphics/canvas.mjs';


export class WeightedGraph {
    constructor() {
        this.adjancentList = {};
        this.numberOfNodes = 0;
        this.xAxis = 0;
        this.yAxis = 0;
        this.xDrawToLeft = 0;
        this.yDrawToLeft = 0;
        this.xDrawToRight = 0;
        this.yDrawToRight = 0;
    }

    addVertex(node, xAxis, yAxis) {
        
        if (!this.adjancentList[node]) {
            this.adjancentList[node] = [];
            this.numberOfNodes += 1;
            createRootArc(xAxis, yAxis, node);
        }
    }

    addEdge(node1, node2, weight, moveTo, drawFrom, drawTo, pos) { 
        // node1 is a key with a value of a list
        // and node2 is going to be pushed into the list
        // showing node1 has a connection to node2
        if (this.adjancentList[node1]) {
            this.adjancentList[node1].push([node2, weight])
            if (pos === 'left') {
                createLeftLine(moveTo[0], moveTo[1], drawFrom, drawTo, weight,  'graph')
            } else {
                createRightLine(moveTo[0], moveTo[1], drawFrom, drawTo, weight, 'graph')
            }
        }

        // node2 which is also an existing key in the adjacentList also having a list as its value
        // will push node1 into its list, showing node2 connection ti node1
        if (this.adjancentList[node2]) {
            this.adjancentList[node2].push([node1, weight])
        }

        // node1 has to have node2 in its list and node2 having node1 in its list 
        // because it is bidirectional (i.e you can visit node2 from node1 and node1 from node2)
    }

    showConnections() {
        let map = this.adjancentList;

        for (let key in map) {
            let str = ""; // using str to concatenate each value's sequence
            for (let i=0; i < map[key].length; i++) {
                str += ' ' + map[key][i]
            }
            console.log(key + ' --> ' + str);
        }

        return;
    }
};

const myGraph = new WeightedGraph();
myGraph.addVertex('0', 200, 200);
myGraph.addVertex('1', 400, 200);
myGraph.addVertex('2', 400, 50);
myGraph.addVertex('3', 400, 400);
myGraph.addVertex('4', 600, 200);
myGraph.addVertex('5', 800, 200);
myGraph.addVertex('6', 1000, 200);

myGraph.addEdge('3', '1',  10, [400, 400], 400, 200, 'left');
myGraph.addEdge('3', '4',  20, [600, 200], 400, 400, 'left');
myGraph.addEdge('4', '2',  30, [400, 50], 600, 200, 'right');
myGraph.addEdge('4', '5',  40, [600, 200], 800, 200, 'right');
myGraph.addEdge('1', '2',  50, [400, 50], 400, 200, 'right');
myGraph.addEdge('1', '0',  60, [200, 200], 400, 200, 'right');
myGraph.addEdge('0', '2',  70, [400, 50], 200, 200, 'left');
myGraph.addEdge('6', '5',  80, [1000, 200], 600, 200, 'right');

myGraph.showConnections();

// MAP RESULT
// map  {
//     '0': [ '1', '2' ],
//     '1': [ '3', '2', '0' ],
//     '2': [ '4', '1', '0' ],
//     '3': [ '1', '4' ],
//     '4': [ '3', '2', '5' ],
//     '5': [ '4', '6' ],
//     '6': [ '5' ]
//   }

// CONNECTIONS
// 0 -->  1 2
// 1 -->  3 2 0
// 2 -->  4 1 0
// 3 -->  1 4
// 4 -->  3 2 5
// 5 -->  4 6
// 6 -->  5