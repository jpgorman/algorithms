/*
Implement a function that flattens a nested array.
flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

export function flatten(arrayToFlatten) {

  function reducer(accum, data) {
    data.forEach((item) => {
      if(Array.isArray(item))
        return reducer(accum, item)
      accum.push(item)
    })
    return accum
  }

  return reducer([], arrayToFlatten)
}
