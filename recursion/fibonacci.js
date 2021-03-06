
/*
Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.
Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...
What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/

export function fibonnaci(n) {

  const memo = [0, 1]
  function calc(n) {
    if(memo[n] === undefined) {
      memo[n] = calc(n-1) + calc(n-2)
    }
    return memo[n]
  }

  return calc(n)
}
