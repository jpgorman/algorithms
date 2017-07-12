import {expect} from "chai"
import {partition} from "../sorting/quickSort"

describe("quickSort", function() {

  describe.only("partition", () => {

    it("should sort array to place pivot", () => {
      const arrayToSort = [3, 7, 2, 6, 1, 5, 4]
      const expected = [3, 1, 2, 4, 6, 5, 7]
      const actual = partition(arrayToSort, 0, arrayToSort.length-1)
      expect(actual).to.eql(expected)
    })

  })

})
