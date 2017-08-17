import {expect} from "chai"
import {spy} from "sinon"
import {Graph} from "../data-structures/graph"

describe("Graph", function() {

  describe("addNode", () => {
    it("should insert node with empty edges array", () => {
      this.graph = new Graph()
      this.graph.addNode(1)
      expect(this.graph).to.eql({
        __nodes: {
          1: []
        }
      })
    })
  })

  describe("addEdge (non-directional)", () => {
    it("should insert edge values into each node", () => {
      this.graph = new Graph()
      this.graph.addNode(1)
      this.graph.addNode(2)
      this.graph.addEdge(1, 2)
      expect(this.graph).to.eql({
        __nodes: {
          1: [2],
          2: [1],
        }
      })
    })
  })

  describe("hasEdge", () => {
    it("should return true if edge exists for node", () => {
      this.graph = new Graph()
      this.graph.addNode(1)
      this.graph.addNode(2)
      this.graph.addEdge(1, 2)
      expect(this.graph.hasEdge(1, 2)).to.eql(true)
    })
  })

  describe("removeEdge", () => {
    it("should remove non-directional edge", () => {
      this.graph = new Graph()
      this.graph.addNode(1)
      this.graph.addNode(2)
      this.graph.addEdge(1, 2)
      this.graph.removeEdge(1, 2)
      expect(this.graph.hasEdge(1, 2)).to.eql(false)
      expect(this.graph.hasEdge(2, 1)).to.eql(false)
    })
  })

  describe("removeNode", () => {
    it("should remove node and any non-directional edges", () => {
      this.graph = new Graph()
      this.graph.addNode(1)
      this.graph.addNode(2)
      this.graph.addEdge(1, 2)
      this.graph.removeNode(1)
      expect(this.graph).to.eql({
        __nodes: {
          2: [],
        }
      })
    })
  })

  describe("contains", () => {
    it("should return true if value exist as node", () => {
      this.graph = new Graph()
      this.graph.addNode(1)
      expect(this.graph.contains(1)).to.eql(true)
    })
  })

  describe("traversal", function() {

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

    describe("forEach", () => {
      it("should invoke once callback on all nodes in graph a receive, node value, neigbors and graph", () => {

        const callback = spy()
        this.graph.forEach(callback)

        const expectedValue = "1"
        const expectedNeighbors = [ 2, 4 ]
        const expectedGraph = {
          "1": [ 2, 4 ],
          "2": [ 1, 3, 4 ],
          "3": [ 2, 5 ],
          "4": [ 1, 2 ],
          "5": [ 3 ]
        }
        const expected = [
          expectedValue,
          expectedNeighbors,
          expectedGraph,
        ]
        expect(callback.args[0]).to.eql(expected)

      })
    })

    describe("traverseDepthFirst", () => {
      it("should traverse graph depth-first", () => {
        const callbackFactory = (accum) => (value, distance) => accum.push([value, distance])
        const result = []
        this.graph.traverseDepthFirst(1, callbackFactory(result))
        expect(result.join(", ")).to.eql("1,0, 2,1, 3,2, 5,3, 4,2")
      })
    })

    describe("traverseBreadthFirst", () => {
      it("should traverse graph breadth-first", () => {
        const callbackFactory = (accum) => (value, distance) => accum.push([value, distance])
        const result = []
        this.graph.traverseBreadthFirst(1, callbackFactory(result))
        expect(result.join(", ")).to.eql("1,0, 2,1, 4,1, 3,2, 5,3")
      })
    })

  })
})
