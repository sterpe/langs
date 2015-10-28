// Binary Search algorithm for a sorted array or list

'use strict'

module.exports = function (LIST, N) {
  let i = 0
  let k = LIST.length - 1
  let j = i + Math.floor((k - i) / 2)

  while (LIST[j] !== N && i !== k) {
    if (LIST[j] > N) {
      k = j - 1
    } else {
      i = j + 1
    }
    j = i + Math.floor((k - i) / 2)
  }

  return LIST[j] === N ? j : -1
}
