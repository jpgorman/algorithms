import {expect} from "chai"
import {recursiveExponent} from "../recursion/recursiveExponent"

describe("recursiveExponent", function() {

  it("should return base to the power", () => {
    const expected = 27
    const actual = recursiveExponent(3, 3)
    expect(actual).to.eql(expected)
  })

  it("should return 1 when power is set to 0", () => {
    const expected = 1
    const actual = recursiveExponent(3, 0)
    expect(actual).to.eql(expected)
  })

})
