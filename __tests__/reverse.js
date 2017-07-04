import {expect} from "chai"
import {recursiveReverse} from "../recursion/recursiveReverse"

describe("recursiveReverse", function() {

  it("should return a new array that is the reverse of the source ", () => {
    const expected = [5, 4, 3, 2, 1]
    const actual = recursiveReverse([1, 2, 3, 4, 5])
    expect(actual).to.eql(expected)
  })

  it("should an empty array if the source array is empty ", () => {
    const expected = []
    const actual = recursiveReverse([])
    expect(actual).to.eql(expected)
  })

})
