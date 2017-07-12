/*
[6, 2, 5, 3] - 0, 3
[3, 2, 5, 6] - swap
[5, 2, 3, 6] - swap - 0, 2
[3, 2, 5, 6] - swap
[2, 3, 5, 6] - swap - 0, 1
[2, 3, 5, 6] - increment - 1, 1
*/

function swap(array, fromPosition, toPosition) {
    const fromVal = array[fromPosition]
    const toVal = array[toPosition]

    array[fromPosition] = toVal
    array[toPosition] = fromVal
    return array
}

export function partition(array, compareLoc, pivotLoc) {
  let pivotVal = array[pivotLoc]
  // terminate if pivotLoc and last are same
  while(compareLoc !== pivotLoc) {
    if(pivotVal > array[compareLoc]) {
      compareLoc++
    } else {
      swap(array, compareLoc, pivotLoc)
      swap(array, compareLoc, --pivotLoc)
    }
  }
  return array
}
