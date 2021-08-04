class AdjacentNode {
    constructor(vertex, next = null) {
        this.vertex = vertex;
        this.next = next;
    }
}

class Bidrection {
    constructor(vertices) {
        this.vertices = vertices;
        this.graph = {};

        this.srcQueue = [];
        this.destQueue = [];
        
        this.srcVisited = new Array(this.vertices).fill(false);
        this.destVisited = new Array(this.vertices).fill(false);

        this.srcParent = new Array(this.vertices).fill(null);
        this.destParent = new Array(this.vertices).fill(null);
    }

    addVertex(vertex) {
        if (!this.graph[vertex]) this.graph[vertex] = [];
    }

    addEdge(srcVertex, destVertex) {
        if (this.graph[srcVertex])
            this.graph[srcVertex].push(destVertex);

        if (this.graph[destVertex])
            this.graph[destVertex].push(srcVertex);
    }

    breadthFirstTraversal(direction="forward") {
        // if forward then bfs should be performed from start node to an expected goal node
        // so it will start shifting elements from the srcQueue which takes elements into
        // the queue as it moves forwared from the start node
        if (direction === "forward") {
            let currentNode = this.srcQueue.shift();

            // console.log('currenode ', this.srcQueue, currentNode)
            let connectedNodesList = this.graph[currentNode]; // currentNode is a list
            // console.log('list ', connectedNodesList)

            let counter = connectedNodesList.length -1;
            while (counter !== -1) {
                let vertex = connectedNodesList[counter];

                if (!this.srcVisited[vertex]) {
                    this.srcQueue.push(vertex);
                    this.srcVisited[vertex] = true;
                    // console.log('src queue ', this.srcQueue)
                }
                counter--;
            }
        }

        if (direction === "backward") {
            let currentNode = this.destQueue.shift(); // 14

            let currentNodeList = this.graph[currentNode]; // [10]

            let counter = currentNodeList.length - 1;
            console.log('des currNode ', currentNode, currentNodeList )

            while (counter !== -1) {
                // add each child node in the list to the queue
                let vertex = currentNodeList[counter];
                console.log('des vertex ', vertex)

                if (!this.destVisited[vertex]) {
                    console.log('in here amigo')
                    this.destQueue.push(vertex);
                    console.log('des que ', this.destQueue)
                    this.destVisited[vertex] = true;
                }
                counter--;
            }
        }
    }

    intersectionNodePoint() {
        for (let i=0; i < this.vertices; i++) {
            if (this.srcVisited[i] && this.destVisited[i]) {
                return i;
            }
        }

        return -1
    }


    bidrectionalSearch(srcVertex, destVertex) {
        // add source to queue and mark it as visited and parent is -1
        this.srcQueue.push(srcVertex); // [0]
        this.srcVisited[srcVertex] = true; // visited at 0
        this.srcParent[srcVertex] = -1; // at 0 its parent is -1 

        this.destQueue.push(destVertex); // [14]
        this.destVisited[destVertex] = true;
        this.destParent[destVertex] = -1;

        while (this.srcQueue.length > 0 && this.srcQueue.length > 0) { // while both queues are not empty
            // bfs in forward direction
            this.breadthFirstTraversal("forward");

            this.breadthFirstTraversal("backward");

            let intersectingNode = this.intersectionNodePoint();

            if (intersectingNode != -1) {
                let pathText = `Path exist between ${srcVertex} and ${destVertex}`;
                let intersectText =  `Intersected at ${intersectingNode}`;
                console.log('src ', this.srcVisited, 'des ', this.destVisited)
                return `${pathText} ${"\v"} ${intersectText}`
            }

        }

        return -1
    }
};

const numberOfVertices = 15;
let sourceVertex = 0;
let destinationVertex = 14;

const graph = new Bidrection(numberOfVertices);

graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(7);
graph.addVertex(8);
graph.addVertex(9);
graph.addVertex(10);
graph.addVertex(11);
graph.addVertex(12);
graph.addVertex(13);
graph.addVertex(14);

graph.addEdge(0, 4)
graph.addEdge(1, 4)
graph.addEdge(2, 5)
graph.addEdge(3, 5)
graph.addEdge(4, 6)
graph.addEdge(5, 6)
graph.addEdge(6, 7)
graph.addEdge(7, 8)
graph.addEdge(8, 9)
graph.addEdge(8, 10)
graph.addEdge(9, 11)
graph.addEdge(9, 12)
graph.addEdge(10, 13)
graph.addEdge(10, 14)

// console.log(graph)
console.log(graph.bidrectionalSearch(sourceVertex, destinationVertex));


// graph: {
//     '0': [ 4 ],
//     '1': [ 4 ],
//     '2': [ 5 ],
//     '3': [ 5 ],
//     '4': [ 0, 1, 6 ],
//     '5': [ 2, 3, 6 ],
//     '6': [ 4, 5, 7 ],
//     '7': [ 6, 8 ],
//     '8': [ 7, 9, 10 ],
//     '9': [ 8, 11, 12 ],
//     '10': [ 8, 13, 14 ],
//     '11': [ 9 ],
//     '12': [ 9 ],
//     '13': [ 10 ],
//     '14': [ 10 ]
//   },

// The trend 
// the keys are used to get their values which is a list of nodes connected to them
// once the list is gotten, then we take each value in the list starting from the right to the left
// and push each node into the queue and mark as visited
// once the bfs is done and there are still item(s) in the queue, the while in bidirec function keeps going
// and it will repeat the process of 

// shifting a value from the queue 
// get the node list connected to the node's value shifted from the queue or get its children
// visit every child node in the list from right to left 
// then we check if the child is visited 
// if visited we add to the queue and mark as visited 
// else we skip the visited chlld node
// it could be visited as it can be a child of another node which would have been visited before the current traversal

// once the bfs is done we have either reference nodes in the stack or an empty stack