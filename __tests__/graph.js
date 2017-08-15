import {expect} from "chai"
import {Graph} from "../data-structures/graph"

describe.only("Graph", function() {

  beforeEach(() => {
    this.graph = new Graph()
    this.graph.addNode(1)
    this.graph.addNode(2)
    this.graph.addNode(3)
  })

  describe("hasEdge", () => {
    it("should return true if edge exists for node", () => {

      this.graph.addEdge(1, 2)
      expect(this.graph.hasEdge(1, 2)).to.eql(true)
    })
  })

  describe("contains", () => {
    it("should return true if value exist as node", () => {
      expect(this.graph.contains(1)).to.eql(true)
    })
  })
})
