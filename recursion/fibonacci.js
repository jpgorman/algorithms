
/*
Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.
Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...
What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/

export function fibonnaci(nth) {
  let cnt = 0
  function calc(prev, current) {
    if(nth === 0)
      return prev
    if(nth === 1)
      return current

    ++cnt
    if(nth === cnt)
      return current
    return calc(current, current + prev)
  }
  return calc(0, 1)
}
