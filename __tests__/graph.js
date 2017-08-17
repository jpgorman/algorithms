import {expect} from "chai"
import {Graph} from "../data-structures/graph"

describe("Graph", function() {

  beforeEach(() => {
    this.graph = new Graph()
    this.graph.addNode(1)
    this.graph.addNode(2)
    this.graph.addNode(3)
    this.graph.addNode(4)
    this.graph.addNode(5)
    this.graph.addEdge(1, 2)
    this.graph.addEdge(1, 4)
    this.graph.addEdge(2, 3)
    this.graph.addEdge(2, 4)
    this.graph.addEdge(3, 5)
    /*
    1---2---3---5
     \ /
      4
    */

  })

  describe("hasEdge", () => {
    it("should return true if edge exists for node", () => {
      expect(this.graph.hasEdge(1, 2)).to.eql(true)
    })
  })

  describe("contains", () => {
    it("should return true if value exist as node", () => {
      expect(this.graph.contains(1)).to.eql(true)
    })
  })

  describe("traverseDepthFirst", () => {
    it("should invoke", () => {
      const callbackFactory = (accum) => (value, distance) => accum.push([value, distance])
      const result = []
      this.graph.traverseDepthFirst(1, callbackFactory(result))
      expect(result.join(", ")).to.eql("1,0, 2,1, 3,2, 5,3, 4,2")
    })
  })

  describe("traverseBreadthFirst", () => {
    it("should invoke", () => {
      const callbackFactory = (accum) => (value, distance) => accum.push([value, distance])
      const result = []
      this.graph.traverseBreadthFirst(1, callbackFactory(result))
      expect(result.join(", ")).to.eql("1,0, 2,1, 4,1, 3,2, 5,3")
    })
  })
})
