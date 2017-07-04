function exponent(base, power) {
  let currentInteration = 1
  let currentValue = base
  while(currentInteration < power) {
    currentInteration++
    currentValue = base * currentValue
  }
  return currentValue
}
