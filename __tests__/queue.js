import {expect} from "chai"
import {Queue} from "../queue"

describe("Queue", function() {

  beforeEach(() => {
    this.queue = new Queue(5)
  })

  describe("enqueue", () => {

    it("should return count of the stack", () => {

      const expected = 1
      const actual = this.queue.enqueue("abc")
      expect(actual).to.eql(expected)
    })

    it("should return Max Size error when maxSize will be reach", () => {

      const expected = "Max capacity already reached. Remove element before adding a new one."
      this.queue.enqueue("abc")
      this.queue.enqueue("abc")
      this.queue.enqueue("abc")
      this.queue.enqueue("abc")
      this.queue.enqueue("abc")
      const actual = this.queue.enqueue("abc")
      expect(actual).to.eql(expected)
    })

  })

  describe("dequeue", () => {

    it("should return the firstItem added to the queue", () => {
      this.queue.enqueue("abc")
      this.queue.enqueue("def")
      this.queue.enqueue("ghi")
      const expected = "abc"
      const actual = this.queue.dequeue()
      expect(actual).to.eql(expected)
    })

    it("should remove firstItem added to the queue", () => {
      this.queue.enqueue("abc")
      this.queue.enqueue("def")
      this.queue.enqueue("ghi")
      this.queue.dequeue()
      const actual = this.queue.count()
      expect(actual).to.eql(2)
    })

  })

  describe("peek", () => {

    it("should return the firstItem added to the stack", () => {
      this.queue.enqueue("abc")
      this.queue.enqueue("def")
      const expected = "abc"
      const actual = this.queue.peek()
      expect(actual).to.eql(expected)
    })

  })

  describe("count", () => {

    it("should return the number of items on the stack", () => {
      this.queue.enqueue("abc")
      this.queue.enqueue("def")
      this.queue.enqueue("ghi")
      expect(this.queue.count()).to.eql(3)
      this.queue.dequeue()
      expect(this.queue.count()).to.eql(2)
      this.queue.dequeue()
      expect(this.queue.count()).to.eql(1)
    })

  })

  describe("contains", () => {
    it("should return true if item contained in the queue", () => {
      this.queue.enqueue("abc")
      this.queue.enqueue("def")
      const expected = this.queue.contains("abc")
      expect(expected).to.be.true
    })
    it("should return false if item is not contained in the queue", () => {
      const expected = this.queue.contains("zzz")
      expect(expected).to.be.false
    })
  })

  describe("until", () => {
    it("should return number of pops until item is returned", () => {
      this.queue.enqueue("abc")
      this.queue.enqueue("def")
      this.queue.enqueue("ghi")
      const expected = this.queue.until("ghi")
      expect(expected).to.eq(3)
    })
    it("should return -1 if items is not contained in queue", () => {
      this.queue.enqueue("abc")
      this.queue.enqueue("def")
      this.queue.enqueue("ghi")
      const expected = this.queue.until("zzz")
      expect(expected).to.eq(-1)
    })
  })

})
