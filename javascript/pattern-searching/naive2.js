'use strict'

module.exports = function (pattern, text) {
  const M = pattern.length
  const N = text.length
  const indexes = []

  let i = 0

  for (; i < N - M; /* Can't match past N - M */ ++i) {
    let j = 0
    for (; j < M; ++j) {
      if (text[i + j] !== pattern[j]) break
    }
    if (j === M) indexes.push(i)
  }

  return indexes
}
