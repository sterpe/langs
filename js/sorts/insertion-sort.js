'use strict'

module.exports = function insertion_sort (ARRAY) {
  let i = 1

  function swap (a, b) {
    let tmp = ARRAY[a]

    ARRAY[a] = ARRAY[b]
    ARRAY[b] = tmp
  }

  for (; i < ARRAY.length; ++i) {
    let j = i
    while ((j > 0) && (ARRAY[j] < ARRAY[j - 1])) {
      swap(j, --j)
    }
  }
  return ARRAY
}
