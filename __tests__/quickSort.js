import {expect} from "chai"
import {partition, quickSort} from "../sorting/quickSort"

describe.only("quickSort", function() {

  describe("partition", () => {

    it("should return final pivot location", () => {
      const arrayToSort = [ 3, 7, 2, 6, 1, 5, 4 ]
      const expected = 3
      const actual = partition(arrayToSort, 0, arrayToSort.length-1)
      expect(actual).to.eql(expected)
    })

  })

  describe.only("quickSort", () => {

    it("should sort array in ascending order", () => {
      const arrayToSort = [7, 6, 5, 4, 3, 2, 1]
      const expected = [1, 2, 3, 4, 5, 6, 7]
      const actual = quickSort(arrayToSort)
      expect(actual).to.eql(expected)
    })

  })

})
