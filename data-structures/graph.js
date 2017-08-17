export class Graph {
  constructor() {
    this.__nodes = {}
  }

  addNode(value) {
    this.__nodes[value] = this.__nodes[value] ||  []
  }

  addEdge(v1, v2) {
    if(!this.__nodes[v1] || !this.__nodes[v2])
      throw new Error(`Invalid node values ${v1} - ${v2}`)
    this.__nodes[v1].push(v2)
    this.__nodes[v2].push(v1)
  }

  hasEdge(v1, v2) {
    return this.__nodes[v1].indexOf(v2) !== -1
  }

  // Returns true if value is found in graph, false otherwise
  contains(value) {
    return !!this.__nodes[value]
  }

  /*
  Traverse the graph and invoke the passed callback once for each node.
  The callback function receives the following for each node: node value, node Neighbors, all nodes.
  */
  forEach() {

  }

  /*
  Implement traversal methods for depth-first and breadth-first traversal. The methods take a starting node and a callback that gets invoked for each node. The callback should receive two arguments: the node value and the distance (number of edges that separate the node from the starting node). See example usage below.
  */
  traverseDepthFirst(currentNode, callback, history = {}, distance = 0) {

    if(this.contains(currentNode)) {
      // invoke callback
      callback(currentNode, distance)

      history[currentNode] = true

      // visit each neighbor
      this.__nodes[currentNode].forEach((neighbor) => {
        if(history[neighbor]) return
        this.traverseDepthFirst(neighbor, callback, history, distance+1)
      }, this)
    }
  }

}
