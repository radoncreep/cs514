// implemementation of unweighted undirected graph
// using edge list/map
// the number of edges is the number of nodes/vertices - 1
// because if there are 2 nodes, then there exist 1 bidirectional edge between them

class Graph {
    constructor() {
        this.adjancentList = {};
        this.numberOfNodes = 0;
    }

    addVertex(node) {
        if (!this.adjancentList[node]) {
            this.adjancentList[node] = [];
            this.numberOfNodes += 1;
        }
    }

    addEdge(node1, node2) { 
        // node1 is a key with a value of a list
        // and node2 is going to be pushed into the list
        // showing node1 has a connection to node2
        if (this.adjancentList[node1]) {
            this.adjancentList[node1].push(node2)
        }

        // node2 which is also an existing key in the adjacentList also having a list as its value
        // will push node1 into its list, showing node2 connection ti node1
        if (this.adjancentList[node2]) {
            this.adjancentList[node2].push(node1)
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

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');

myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

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