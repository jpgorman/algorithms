import {expect} from "chai"
import {flatten} from "../recursion/flatten"

describe("flatten", function() {

  it("should flatten a multi-dimensional array", () => {
    const expected = [1, 2, 3, 4]
    const actual = flatten([1,[2],[3, [[4]]]])
    expect(actual).to.eql(expected)
  })

})
