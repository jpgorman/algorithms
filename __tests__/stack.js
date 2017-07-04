import {expect} from "chai"
import {Stack} from "../stack"

describe("Stack", function() {

  beforeEach(() => {
    this.stack = new Stack(5)
  })

  describe("push", () => {

    it("should return count of the stack", () => {

      const expected = 1
      const actual = this.stack.push("abc")
      expect(actual).to.eql(expected)
    })

    it("should return Max Size error when maxSize will be reach", () => {

      const expected = "Max capacity already reached. Remove element before adding a new one."
      this.stack.push("abc")
      this.stack.push("abc")
      this.stack.push("abc")
      this.stack.push("abc")
      this.stack.push("abc")
      const actual = this.stack.push("abc")
      expect(actual).to.eql(expected)
    })

  })

  describe("pop", () => {

    it("should return the lastItem added to the stack", () => {
      this.stack.push("abc")
      this.stack.push("def")
      this.stack.push("ghi")
      const expected = "ghi"
      const actual = this.stack.pop()
      expect(actual).to.eql(expected)
    })

    it("should remove lastItem added to the stack", () => {
      this.stack.push("abc")
      this.stack.push("def")
      this.stack.push("ghi")
      this.stack.pop()
      const actual = this.stack.count()
      expect(actual).to.eql(2)
    })

  })

  describe("peek", () => {

    it("should return the lastItem added to the stack", () => {
      this.stack.push("abc")
      this.stack.push("def")
      const expected = "def"
      const actual = this.stack.peek()
      expect(actual).to.eql(expected)
    })

  })

  describe("count", () => {

    it("should return the number of items on the stack", () => {
      this.stack.push("abc")
      this.stack.push("def")
      this.stack.push("ghi")
      expect(this.stack.count()).to.eql(3)
      this.stack.pop()
      expect(this.stack.count()).to.eql(2)
      this.stack.pop()
      expect(this.stack.count()).to.eql(1)
    })

  })

  describe("contains", () => {
    it("should return true if item contained in the stack", () => {
      this.stack.push("abc")
      this.stack.push("def")
      const expected = this.stack.contains("abc")
      expect(expected).to.be.true
    })
    it("should return false if item is not contained in the stack", () => {
      const expected = this.stack.contains("zzz")
      expect(expected).to.be.false
    })
  })

  describe("until", () => {
    it("should return number of pops until item is returned", () => {
      this.stack.push("abc")
      this.stack.push("def")
      this.stack.push("ghi")
      const expected = this.stack.until("abc")
      expect(expected).to.eq(2)
    })
    it("should return -1 if items is not contained in stack", () => {
      this.stack.push("abc")
      this.stack.push("def")
      this.stack.push("ghi")
      const expected = this.stack.until("zzz")
      expect(expected).to.eq(-1)
    })
  })

})
