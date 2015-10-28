// How to find if a given expression is a valid arithmetic
// expression?
// E.g.,
//   (())()) - Invalid expression
//   (()()) - Valid expression

// This is the language of matched parentheticals.

'use strict'

const LEFT_PAREN = '('
const RIGHT_PAREN = ')'

module.exports = function (STRING) {
  const STACK = []
  let i = 0
  for (; i < STRING.length; ++i) {
    if (STRING.charAt(i) === LEFT_PAREN) {
      STACK.push(LEFT_PAREN)
    } else if (STRING.charAt(i) === RIGHT_PAREN) {
      if (STACK.length) {
        STACK.pop()
      } else {
        return false
      }
    }
  }
  return STACK.length === 0
}
