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

}
