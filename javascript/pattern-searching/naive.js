// Given a text txt[0..n-1] and a pattern pat[0..m-1],
// write a function search(char pat[], char txt[]) that
// prints all occurrences of pat[] in txt[].
//
// You may assume n > m.
//
// Examples:
//   txt[] = 'THIS IS A TEST TEXT'
//   pat[] = 'TEST'
//   search(pat, text) => 10

'use strict'

module.exports = function (pattern, text) {
  const M = pattern.length
  const N = text.length
  const indexes = []

  let i = 0
  for (; i < N - M; ++i) {
    let j = 0
    for (; j < M; ++j) {
      if (text[i + j] !== pattern[j]) {
        break
      }
    }
    if (j === M) {
      indexes.push(i)
    }
  }
  return indexes
}
