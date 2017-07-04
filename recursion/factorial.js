/*
Implement factorial.
factorial(5) => 5*4*3*2*1 => 120
*/

export function factorial(base) {
  if(base <= 0)
    return 0

  function calc(total, cnt) {
    if(cnt > 0)
      return calc(total * cnt, --cnt)

    return total
  }
  return calc(base, base - 1)
}
