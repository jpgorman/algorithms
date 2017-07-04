import {expect} from "chai"
import {factorial} from "../recursion/factorial"

describe("factorial", function() {

  it("should return the factorial of the given integer", () => {
    const expected = 120
    const actual = factorial(5)
    expect(actual).to.eql(expected)
  })

  it("should return 0 if given integer is less than or equal to 0", () => {
    const expected = 0
    const actual = factorial(-10)
    expect(actual).to.eql(expected)
  })

})
