// Find the first and last occurrence of a given number
// in a sorted array of integers.
// E.g.:
//   [1, 2, 3, 4, 5, 5, 7, 8], 5 => (4, 5)

// Find N via binary search, move in both directions from index(N)

'use strict'

function binarySearch (ARRAY, N) {
  let i = 0
  let k = ARRAY.length - 1
  let j = i + Math.floor((k - i) / 2)
 
  console.log(i,j,k)
  while (ARRAY[j] !== N && i !== k) {
    if (ARRAY[j] > N) {
      k = j - 1
      j = i + Math.floor((k - i) / 2)
    } else {
      i = j + 1
      j = i + Math.floor((k - i) / 2)
    }
    console.log(i,j,k)
  }
 
  return ARRAY[j] === N ? j : -1
}

module.exports = binarySearch
