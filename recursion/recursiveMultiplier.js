/* Write a function 'recursiveMultiplier' that takes two arguments,
   'arr and num', and multiplies each arr value by num
   and returns an array of the values. */

export function recursiveMultiplier(arr, multiplier) {
  function calc(newArray, index) {
    if(newArray.length < arr.length) {
      newArray.push(arr[index] * multiplier)
      return calc(newArray, ++index)
    }
    return newArray
  }
  return calc([], 0)
}
