import {expect} from "chai"
import {BinarySearchTree} from "../data-structures/binary-search-tree"

describe("BinarySearchTree", function() {

  describe("constructor", () => {
    it("should create a root node", () => {
      const expected = {
        root: {
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
      expect(this.result.root.left.value).to.eql(2)
    })

    it("should add values greater than current to right", () => {
      expect(this.result.root.right.value).to.eql(7)
    })
    it("should add values less than current to left recursively", () => {
      expect(this.result.root.left.left.value).to.eql(1)
    })

    it("should add values less than current to left recursively", () => {
      expect(this.result.root.left.right.value).to.eql(4)
    })

    it("should add values greater than current to right recursively", () => {
      expect(this.result.root.right.left.value).to.eql(6)
    })

    it("should add values greater than current to right recursively", () => {
      expect(this.result.root.right.right.value).to.eql(8)
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

  describe("traversing", function() {

    beforeEach(() => {
      this.result = new BinarySearchTree(5)
      this.result.insert(3) // left
      this.result.insert(4) // right
      this.result.insert(1) // left
      this.result.insert(2) // right
      this.result.insert(6) // right
      this.result.insert(7) // right
      this.result.insert(8) // right
    })

    describe("traverseInOrder", () => {

      it("should call callbackFn on each node in tree", () => {
        const callbackFactory = (accum) => ({value}) => accum.push(value)
        const result = []
        this.result.traverseInOrder(callbackFactory(result))

        expect(result.join(", ")).to.eq("1, 2, 3, 4, 5, 6, 7, 8")
      })
    })

    describe("traversePreOrder", () => {

      it("should call callbackFn on each node value before it's child nodes", () => {
        const callbackFactory = (accum) => ({value}) => accum.push(value)
        const result = []
        this.result.traversePreOrder(callbackFactory(result))

        expect(result.join(", ")).to.eq("5, 3, 1, 2, 4, 6, 7, 8")
      })

    })

    describe("traversePostOrder", () => {

      it("should call callbackFn on each node value before it's child nodes", () => {
        const callbackFactory = (accum) => ({value}) => accum.push(value)
        const result = []
        this.result.traversePostOrder(callbackFactory(result))

        expect(result.join(", ")).to.eq("2, 1, 4, 3, 8, 7, 6, 5")
      })

    })

  })

  describe("deleteMin", () => {
    it("should set left to null when the min value is in the left position", () => {
      const result = new BinarySearchTree(5)
      result.insert(4) // left
      result.insert(6) // right
      result.insert(3) // left
      result.deleteMin()

      const expected = {
        root: {
          value: 5,
          left: {
            value: 4,
            left: null,
            right: null,
          },
          right: {
            value: 6,
            left: null,
            right: null,
          },
        },
      }

      expect(result).to.eql(expected)
    })

    it("should swap node from right position when parent is lowest value", () => {
      const result = new BinarySearchTree(7)
      result.insert(3) // left
      result.insert(6) // right
      result.deleteMin()

      const expected = {
        root: {
          value: 7,
          left: {
            value: 6,
            left: null,
            right: null,
          },
          right: null,
        },
      }
      expect(result).to.eql(expected)
    })

    it("should swap node from right position into root when root is lowest value", () => {
      const result = new BinarySearchTree(7)
      result.insert(8) // right
      result.insert(9) // right
      result.insert(10) // right
      result.deleteMin()

      const expected = {
        root: {
          value: 8,
          left: null,
          right: {
            value: 9,
            left: null,
            right: {
              value: 10,
              left: null,
              right: null,
            },
          },
        },
      }
      expect(result).to.eql(expected)
    })
  })

  describe("deleteMax", () => {
    it("should set right to null when the max value is in the right position", () => {
      const result = new BinarySearchTree(5)
      result.insert(8) // right
      result.insert(9) // right
      result.insert(7) // left
      result.deleteMax()

      const expected = {
        root: {
          value: 5,
          left: null,
          right: {
            value: 8,
            left: {
              value: 7,
              left: null,
              right: null,
            },
            right: null,
          },
        },
      }
      expect(result).to.eql(expected)
    })

    it("should swap node from left position when parent is highest value", () => {
      const result = new BinarySearchTree(2)
      result.insert(4) // right
      result.insert(3) // left
      result.deleteMax()

      const expected = {
        root: {
          value: 2,
          right: {
            value: 3,
            left: null,
            right: null,
          },
          left: null,
        },
      }
      expect(result).to.eql(expected)
    })

    it("should swap node from left position into root when root is highest value", () => {
      const result = new BinarySearchTree(9)
      result.insert(8) // left
      result.deleteMax()

      const expected = {
        root: {
          value: 8,
          right: null,
          left: null,
        },
      }
      expect(result).to.eql(expected)
    })

  })

  describe("isValid", () => {

    it("should return true if BST is valid", () => {
      const result = new BinarySearchTree(9)
      result.insert(8) // left
      result.insert(10) // right
      result.isValid()

      expect(result.isValid()).to.eql(true)
    })

    it("should return false if BST is NOT valid", () => {
      const result = new BinarySearchTree(undefined)
      result.insert(undefined) // left
      result.insert(undefined) // right
      result.isValid()

      expect(result.isValid()).to.eql(false)
    })
  })

  describe("removeNode", () => {

    it("should removeNode that has no children", () => {
      const result = new BinarySearchTree(9)
      result.insert(8) // left
      result.insert(10) // right
      result.deleteNode(10)

      const expected = {
        root: {
          value: 9,
          right: null,
          left: {
            value: 8,
            left: null,
            right: null,
          },
        },
      }
      expect(result).to.eql(expected)
    })

    it("should swap Node parent if it has one left child", () => {
      const result = new BinarySearchTree(9)
      result.insert(7) // left
      result.insert(6) // left
      result.deleteNode(7)

      const expected = {
        root: {
          value: 9,
          right: null,
          left: {
            value: 6,
            left: null,
            right: null,
          },
        },
      }
      expect(result).to.eql(expected)
    })

    it("should swap Node parent if it has one right child", () => {
      const result = new BinarySearchTree(9)
      result.insert(7) // left
      result.insert(8) // left
      result.deleteNode(7)

      const expected = {
        root: {
          value: 9,
          right: null,
          left: {
            value: 8,
            left: null,
            right: null,
          },
        },
      }
      expect(result).to.eql(expected)
    })

    it("should remove Root that has 2 children", () => {
      const result = new BinarySearchTree(7)
      result.insert(6) // left
      result.insert(8) // right
      result.deleteNode(7)

      const expected = {
        root: {
          value: 8,
          left: {
            value: 6,
            left: null,
            right: null,
          },
          right: null,
        },
      }
      expect(result).to.eql(expected)
    })

    it("should remove Node that has 2 children", () => {
      const result = new BinarySearchTree(7)
      result.insert(3) // left
      result.insert(5) // right
      result.insert(4) // left
      result.insert(6) // right
      result.deleteNode(5)

      const expected = {
        root: {
          value: 7,
          right: null,
          left: {
            value: 3,
            left: null,
            right: {
              value: 6,
              left: {
                value: 4,
                left: null,
                right: null,
              },
              right: null,
            },
          },
        },
      }
      expect(result).to.eql(expected)
    })
  })

  describe("isFull", () => {
    it("should return true if all nodes in BST contain 2 children", () => {
      const result = new BinarySearchTree(9)
      result.insert(8) // left
      result.insert(10) // right
      expect(result.isFull()).to.eql(true)
    })
    it("should return true if all nodes in BST contain no children", () => {
      const result = new BinarySearchTree(9)
      result.insert(8) // left
      result.insert(10) // right
      expect(result.isFull()).to.eql(true)
    })
    it("should return true if all nodes in BST contain no children or 2 children", () => {
      const result = new BinarySearchTree(9)
      result.insert(8) // left
      result.insert(12) // right
      result.insert(11) // left
      result.insert(13) // right
      expect(result.isFull()).to.eql(true)
    })
    it("should return false if any node has 1 child", () => {
      const result = new BinarySearchTree(9)
      result.insert(8) // left
      result.insert(10) // right
      result.insert(11) // right
      expect(result.isFull()).to.eql(false)
    })
  })

})
