function swap(array, fromPosition, toPosition) {
    const fromVal = array[fromPosition]
    const toVal = array[toPosition]

    array[fromPosition] = toVal
    array[toPosition] = fromVal
    return array
}

// [3, 7, 2] - compareLoc=0 pivotLoc=2
// [2, 7, 3] - compareLoc=0 pivotLoc=2
// [7, 2, 3] - compareLoc=0 pivotLoc=1

// [7, 2, 3] - compareLoc=0 pivotLoc=1
// [2, 7, 3] - compareLoc=0 pivotLoc=0
// return pivotLoc=0
export function partition(array, compareLoc, pivotLoc) {
  let pivotVal = array[pivotLoc] // 1
  // terminate if pivotLoc and last are same
  while(compareLoc !== pivotLoc) {
    if(pivotVal > array[compareLoc]) {
      compareLoc++
    } else {
      swap(array, compareLoc, pivotLoc)
      swap(array, compareLoc, --pivotLoc)
    }
  }
  return pivotLoc
}

export function quickSort(array, lo, hi) {
  lo = lo === undefined ? 0 : lo
  hi = hi === undefined ? array.length - 1 : hi

  if(lo < hi) {
    const pivotLoc = partition(array, lo, hi)
    quickSort(array, lo, pivotLoc - 1)
    quickSort(array, pivotLoc + 1, hi)
  }
  return array
}
