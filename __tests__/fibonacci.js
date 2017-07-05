import {expect} from "chai"
import {fibonnaci} from "../recursion/fibonacci"

describe("fibonnaci", function() {

  it("should return the fibonnaci sequence of the given integer", () => {
    const expected = 2
    const actual = fibonnaci(3)
    expect(actual).to.eql(expected)
  })

  it("should return the fibonnaci sequence of the given integer", () => {
    const expected = 0
    const actual = fibonnaci(0)
    expect(actual).to.eql(expected)
  })

  it("should return the fibonnaci sequence of the given integer", () => {
    const expected = 1
    const actual = fibonnaci(1)
    expect(actual).to.eql(expected)
  })

})
