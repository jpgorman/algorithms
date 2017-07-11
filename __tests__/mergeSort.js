import {expect} from "chai"
import {merge, mergeSort} from "../sorting/mergeSort"

describe.only("mergeSort", function() {

  describe("merge", () => {

    it("should return a sorted array, when given 2 sorted arrays", () => {
      const expected = [1, 3, 10, 27, 44, 55]
      const actual = merge([10, 27, 44], [1, 3, 55])
      expect(actual).to.eql(expected)
    })

    it("should return early when left array is sorted before right", () => {
      const expected = [1, 3, 10, 27, 44]
      const actual = merge([1, 3], [10, 27, 44])
      expect(actual).to.eql(expected)
    })

    it("should return early when right array is sorted before left", () => {
      const expected = [1, 3, 10, 27, 44]
      const actual = merge([10, 27, 44], [1, 3])
      expect(actual).to.eql(expected)
    })

  })

  describe("mergeSort", () => {
    it("should sorted array in ascending order", () => {
      const expected = [1, 3, 10, 27, 44, 55]
      const actual = mergeSort([55, 44, 27, 3, 1, 10])
      expect(actual).to.eql(expected)
    })
  })

})
