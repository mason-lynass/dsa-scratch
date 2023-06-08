class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left
                }

                if (value > currentNode.value) {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right
                }
            }
        }

    }
    lookup(value) {
        if (this.root === null) {
            return false;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
            else if (value === currentNode.value) {
                return currentNode;
            } else return false;
        }
        return false;
    }
    // remove() {
    //     if (this.root === null) {
    //         return false;
    //     }
    //     let currentNode = this.root;
    //     let parentNode = null;
    //     while (currentNode) {
    //         if (value < currentNode.value) {
    //             parentNode = currentNode
    //             currentNode = currentNode.left;
    //         } else if (value > currentNode.value) {
    //             parentNode = currentNode
    //             currentNode = currentNode.right; 
    //         } else if (value === currentNode.value) {

    //         }
    //     }
    // }
}

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

// Graphs!

// Edge List
// list every connection

// Adjacent List
// list all connections for each index in index order

// Adjacency Matrix
// with 1 & 0, make an array for each index, add a 1 if that index has a connection to another index
// [0,0,1,0]
// [0,0,1,1]
// [1,1,0,1]
// [0,1,1,0]

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node){
        this.adjacentList[node] = [];
        this.numberOfNodes++
    }
    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push(node1)
    }
    showConnections() {
        const allNodes = Object.keys(this.adjacentList)
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = '';
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + '-->' + connections)
        }
    }
 }

//  const myGraph = new Graph();
//  myGraph.addVertex('0')
//  myGraph.addVertex('1')
//  myGraph.addVertex('2')
//  myGraph.addVertex('3')
//  myGraph.addVertex('4')
//  myGraph.addVertex('5')
//  myGraph.addVertex('6')
//  myGraph.addEdge('3', '1')
//  myGraph.addEdge('3', '4')
//  myGraph.addEdge('4', '2')
//  myGraph.addEdge('4', '5')
//  myGraph.addEdge('1', '2')
//  myGraph.addEdge('1', '0')
//  myGraph.addEdge('0', '2')
//  myGraph.addEdge('6', '5')

//  myGraph.showConnections();

function findFactorialRecursive(number) {
    if (number === 2) return 2 
    return number * findFactorialRecursive(number - 1)
}

function findFactorialIterative(number) {
    let answer = 1
    if (number < 0) return 0
    if (number === 1) return 1 
    for (let i = 2; i <= number; i++) {
        answer = answer * i
        console.log(answer, i)
    }
    console.log(answer)
}

function fibIterative(n) {

}

fibIterative(5)

function fibRecursive(n) {
    if (n < 2) {
        return n
    }
    return fibRecursive(n - 1) + fibRecursive (n - 2)
}