function swap(list, current, next) {

  let moveUp, moveDown
  if (list[current] > list[next]) {
    moveUp = list[current]
    moveDown = list[next]
    list[next] = moveUp
    list[current] = moveDown
  }
  return list
}

export function bubbleSort(list) {
  // while wall > 0
  var wall = list.length; // max length of items to sort
  // iterate through array up to wall
  while (wall >= 0) {
    // 27, 9, 44, 3, 1, 10
    for(var i=0; i<wall; i++) {
      list = swap(list, i, i+1)
    }
    wall-- // as each sort bubbles a value to the end decrement number of items to search on each pass
  }
  return list
}
