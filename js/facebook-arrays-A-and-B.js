// We have an array of objects A and an array of indexes B.
// Reorder objects in array A with given indexes in array B.
// Do not change array A's length.
// E.g.:
//   var A = [C, D, E, F, G]
//   var B = [3, 0, 4, 1, 2]
//   sort(A, B)
//   // A => [D, F, G, C, E]

'use strict'

module.exports = function (A, B) {

  let i = 0
  while (i < B.length) {
    // if B[i] = i, then A[i] is in correct position
    if (B[i] === i) {
      i++
    } else {
      let tmpA = A[B[i]]
      let tmpB = B[B[i]]
      A[B[i]] = A[i]
      B[B[i]] = B[i]
      A[i] = tmpA
      B[i] = tmpB
    }
  }
  return A
}
