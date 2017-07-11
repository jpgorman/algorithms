import {expect} from "chai"
import {bubbleSort} from "../sorting/bubbleSort"

describe("bubbleSort", function() {

  it("should return array sorted by ascending order", () => {
    const expected = [1, 3, 9, 10, 27, 44]
    const actual = bubbleSort([27, 9, 3, 1, 10, 44])
    console.log(actual)
    expect(actual).to.eql(expected)
  })

})
