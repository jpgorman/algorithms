export function recursiveExponent(base, power) {
  function calc(val, interation) {
    if (0 === power)
      return 1

    if(interation < power) {
      return calc(val * base, ++interation)
    }
    return val
  }
  return calc(base, 1)
}
