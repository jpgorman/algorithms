import {expect} from "chai"
import {BinarySearchTree} from "../data-structures/binary-search-tree"

describe("BinarySearchTree", function() {

  describe("constructor", () => {
    it("should create a current node", () => {
      const expected = {
        current: {
          value: 5,
          left: null,
          right: null,
        },
      }
      const actual = new BinarySearchTree(5)
      expect(actual).to.eql(expected)
    })
  })

  describe("insert", function() {
    beforeEach(() => {
      this.result = new BinarySearchTree(5)
      this.result.insert(2)
      this.result.insert(7)
      this.result.insert(4)
      this.result.insert(1)
      this.result.insert(6)
      this.result.insert(8)
    })

    it("should add values less than current to left", () => {
      expect(this.result.current.left.value).to.eql(2)
    })

    it("should add values greater than current to right", () => {
      expect(this.result.current.right.value).to.eql(7)
    })
    it("should add values less than current to left recursively", () => {
      expect(this.result.current.left.left.value).to.eql(1)
    })

    it("should add values less than current to left recursively", () => {
      expect(this.result.current.left.right.value).to.eql(4)
    })

    it("should add values greater than current to right recursively", () => {
      expect(this.result.current.right.left.value).to.eql(6)
    })

    it("should add values greater than current to right recursively", () => {
      expect(this.result.current.right.right.value).to.eql(8)
    })
  })

  describe("contains", function() {
    beforeEach(() => {
      this.result = new BinarySearchTree(5)
      this.result.insert(2)
      this.result.insert(7)
      this.result.insert(4)
      this.result.insert(1)
      this.result.insert(6)
      this.result.insert(8)
    })

    it("should return early when value is found", () => {
      expect(this.result.contains(5)).to.eql(true)
    })

    it("should return false when value is NOT found", () => {
      expect(this.result.contains(99)).to.eql(false)
    })

    it("traverse to the left to find values less than current", () => {
      expect(this.result.contains(2)).to.eql(true)
    })

    it("traverse to the right to find values greater than current", () => {
      expect(this.result.contains(7)).to.eql(true)
    })

    it("traverse recursively to find values less than current", () => {
      expect(this.result.contains(1)).to.eql(true)
    })

    it("traverse recursively to find values less than current", () => {
      expect(this.result.contains(6)).to.eql(true)
    })

    it("traverse recursively to find values greater than current", () => {
      expect(this.result.contains(4)).to.eql(true)
    })

    it("traverse recursively to find values greater than current", () => {
      expect(this.result.contains(8)).to.eql(true)
    })

  })

  describe("traverseDepthFirstInOrder", () => {

    beforeEach(() => {
      this.result = new BinarySearchTree(5)
      this.result.insert(1)
      this.result.insert(2)
      this.result.insert(3)
      this.result.insert(4)
      this.result.insert(6)
      this.result.insert(7)
      this.result.insert(8)
    })

    it("should call callbackFn on each node in tree", () => {
      const callbackFactory = (accum) => (value) => accum.push(value)
      const result = []
      this.result.traverseDepthFirstInOrder(callbackFactory(result))

      expect(result.join(", ")).to.eq("1, 2, 3, 4, 5, 6, 7, 8")
    })
  })

})
