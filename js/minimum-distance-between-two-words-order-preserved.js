// Find minimum distance between two words (order preserved)
// in a big string.
// E.g.
//   "hello how are you", "hello", "you" => 3
//   "hello how are hello you", "hello", "you" => 1
//   "you are hello", "hello", "you" => -1
//   "hello how are hello", "hello", "you" => -1

'use strict'

module.exports = function (STRING, A, B) {
  const ARRAY = STRING.split(' ')
  let minDistance = Infinity
  let currDistance = null

  let i = 0
  for (; i < ARRAY.length; ++i) {
    if (ARRAY[i] === A) {
      currDistance = 1
    } else if (ARRAY[i] === B && currDistance) {
      if (minDistance === Infinity) {
        minDistance = currDistance
      } else if (currDistance < minDistance) {
        minDistance = currDistance
      }
      currDistance = null
    } else {
      currDistance++
    }
  }
  return minDistance === Infinity
    ? -1
    : minDistance
}
