import {expect} from "chai"
import {recursiveMultiplier} from "../recursion/recursiveMultiplier"

describe("recursiveMultiplier", function() {

  it("should return new array that multiplies each arr value by multiplier ", () => {
    const expected = [5, 10, 15, 20, 25]
    const actual = recursiveMultiplier([1, 2, 3, 4, 5], 5)
    expect(actual).to.eql(expected)
  })

  it("should an empty array if the source array is empty ", () => {
    const expected = []
    const actual = recursiveMultiplier([], 5)
    expect(actual).to.eql(expected)
  })

})
