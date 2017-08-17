export class Graph {
  constructor() {
    this.__nodes = {}
  }

  addNode(value) {
    this.__nodes[value] = this.__nodes[value] ||  []
  }

  removeNode(value) {
    const edges = this.__nodes[value]
    edges.forEach((edge) => this.removeEdge(value, edge))
    delete(this.__nodes[value])
  }

  addEdge(v1, v2) {
    if(!this.__nodes[v1] || !this.__nodes[v2])
      throw new Error(`Invalid node values ${v1} - ${v2}`)
    this.__nodes[v1].push(v2)
    this.__nodes[v2].push(v1)
  }

  removeEdge(v1, v2) {
    if(this.hasEdge(v1, v2))
      this.__nodes[v2].splice(this.__nodes[v2].indexOf(v1), 1)
      this.__nodes[v1].splice(this.__nodes[v1].indexOf(v2), 1)
  }

  hasEdge(v1, v2) {
    return this.__nodes[v1].indexOf(v2) !== -1
  }

  // Returns true if value is found in graph, false otherwise
  contains(value) {
    return !!this.__nodes[value]
  }

  forEach(callback) {
    const currentNode = Object.keys(this.__nodes).forEach((key) => {
      callback(key)
    })
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

  /*
  Starting at the node with the value passed in, traverse the graph and invoke the callback for each node in a breadth-first fashion.
  */

  __getUnvisitedNodes(history) {
    // where neighbor does not appear in history
    return (neighbor) => history[neighbor] === undefined
  }

  __addDistance(history, currentNode) {
    return (neighbor) => {
      if(history[neighbor] === undefined) {
        const distance = history[currentNode]
        history[neighbor] = distance + 1
      }
    }
  }

  traverseBreadthFirst(value, callback) {

    const history = {}
    let distance = 0
    let queue = [value]
    history[value] = distance
    while(queue.length) {
      const nextValue = queue.shift()
      callback(nextValue, history[nextValue])
      const unvisitedNodes = this.__nodes[nextValue].filter(this.__getUnvisitedNodes(history))
      unvisitedNodes.forEach(this.__addDistance(history, nextValue))

      // append to queue
      queue = queue.concat(unvisitedNodes)
    }
  }

}
