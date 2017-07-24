import {expect} from "chai"
import {spy} from "sinon"
import {LinkedList} from "../data-structures/linked-list"

describe("LinkedList", function() {

  describe("constructor", () => {
    it("should create a head and tail node", () => {
      const expected = {
        head: {
          data: "ABC",
          next: null,
        },
        tail: {
          data: "ABC",
          next: null,
        },
      }
      const actual = new LinkedList("ABC")
      expect(actual).to.eql(expected)
    })
  })

  describe("forEach", () => {

    it("invoke callback function with the value of each node", () => {
      const linkedList = new LinkedList("ABC")
      const callbackFn = spy()
      linkedList.forEach(callbackFn)
      expect(callbackFn.calledOnce).to.eql(true)
      expect(callbackFn.calledWith({data: "ABC", next: null})).to.eql(true)
    })
  })

  describe("appendToTail", () => {

    it("add a new tail node at the end of the list with the associated value passed in", () => {
      const actual = new LinkedList("ABC")
      const callbackFn = spy()
      actual.appendToTail("DEF")
      const tail = {
        data: "DEF",
        next: null,
      }
      const expected = {
        head: {
          data: "ABC",
          next: tail,
        },
        tail,
      }
      expect(actual).to.eql(expected)
    })
  })

  describe("findNodeByValue", () => {

    it("first node that has a value matching what was passed in", () => {
      const linkedList = new LinkedList("ABC")
      linkedList.appendToTail("DEF")
      linkedList.appendToTail("GHI")
      const foundNode = linkedList.findNodeByValue("DEF")
      const expected = {
        data: "DEF",
        next: linkedList.tail,
      }
      expect(foundNode).to.eql(expected)
    })
  })

  describe("insertAfter", () => {

    it("insert new node associated with value passed in after refNode", () => {
      const linkedList = new LinkedList("ABC")
      linkedList.appendToTail("DEF")
      linkedList.appendToTail("GHI")
      const nodeToInsertAfter = linkedList.findNodeByValue("GHI")
      linkedList.insertAfter(nodeToInsertAfter, "INSERTED!!")

      const expected = {
        head: {
          data: "ABC",
          next: {
            data: "DEF",
            next: {
              data: "GHI",
              next: {
                data: "INSERTED!!",
                next: null,
              },
            },
          },
        },
        tail: {
          data: "INSERTED!!",
          next: null,
        },
      }

      expect(linkedList).to.eql(expected)
    })
  })

  describe("removeAfter", () => {

    it("insert new node associated with value passed in after refNode", () => {
      const linkedList = new LinkedList("ABC")
      linkedList.appendToTail("DEF")
      linkedList.appendToTail("GHI")
      const nodeToRemoveAfter = linkedList.findNodeByValue("DEF")
      linkedList.removeAfter(nodeToRemoveAfter)

      const expected = {
        head: {
          data: "ABC",
          next: {
            data: "DEF",
            next: null,
          },
        },
        tail: {
          data: "DEF",
          next: null,
        },
      }

      expect(linkedList).to.eql(expected)
    })
  })

  describe("insertHead", () => {
    it("should insert new node at head position of list", () => {
      const linkedList = new LinkedList("ABC")
      linkedList.appendToTail("DEF")
      linkedList.insertHead("HEAD!")

      const expected = {
        head: {
          data: "HEAD!",
          next: {
            data: "ABC",
            next: {
              data: "DEF",
              next: null,
            },
          }
        },
        tail: {
          data: "DEF",
          next: null,
        },
      }
      expect(linkedList).to.eql(expected)
    })
  })

  describe("removeHead", () => {
    it("should replace current head with next item in list", () => {
      const linkedList = new LinkedList("ABC")
      linkedList.appendToTail("DEF")
      linkedList.removeHead()

      const expected = {
        head: {
          data: "DEF",
          next: null
        },
        tail: {
          data: "DEF",
          next: null
        },
      }
      expect(linkedList).to.eql(expected)
    })
  })

  describe("removeTail", () => {
    it("should replace current tail with previous item in list", () => {
      const linkedList = new LinkedList("ABC")
      linkedList.appendToTail("DEF")
      linkedList.appendToTail("GHI")
      linkedList.removeTail()

      const expected = {
        head: {
          data: "ABC",
          next: {
            data: "DEF",
            next: null,
          }
        },

        tail: {
          data: "DEF",
          next: null,
        },
      }
      expect(linkedList).to.eql(expected)
    })
  })

  describe("print", () => {
    it("should return a string with all values in list", () => {
      const linkedList = new LinkedList("ABC")
      linkedList.appendToTail("DEF")
      linkedList.appendToTail("GHI")
      const expected = "ABC, DEF, GHI"
      expect(linkedList.print()).to.eql(expected)
    })
  })

})
