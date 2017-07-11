export function merge(leftArray, rightArray) {
  let result = [], leftPointer = 0, rightPointer = 0
  while(result.length < (leftArray.length + rightArray.length)) {
    if(leftArray.length === leftPointer) {
      result = result.concat(rightArray.slice(rightPointer))
    }

    else if(rightArray.length === rightPointer) {
      result = result.concat(leftArray.slice(leftPointer))
    }

    else if(leftArray[leftPointer] <= rightArray[rightPointer]) {
      result.push(leftArray[leftPointer++])
    }

    else {
      result.push(rightArray[rightPointer++])
    }
  }

  return result
}

/*
[5, 7, 2]
 - [5]
[7, 2]
 -  [7]
 -  [2]
 => [2, 7]
 => [2, 5, 7]
*/

export function mergeSort(array) {

  if(array.length === 1) return array
  const leftArray = array.slice(0, array.length / 2)
  const rightArray = array.slice(array.length / 2)
  const leftSorted = mergeSort(leftArray)
  const rightSorted = mergeSort(rightArray)

  return merge(leftSorted, rightSorted)

}
