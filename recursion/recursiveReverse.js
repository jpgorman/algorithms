/* Write a function 'recursiveReverse' that takes an array
  and uses recursion to return its contents in reverse. */

export function recursiveReverse(arr) {
  function calc(newArray) {
    if(arr.length > 0) {
      newArray.push(arr.pop())
      return calc(newArray)
    }
    return newArray
  }
  return calc([])
}
