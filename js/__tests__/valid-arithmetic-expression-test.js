/* global
  describe
  expect
  jest
  it
*/

'use strict'

const FILE = '../valid-arithmetic-expression'

jest.dontMock(FILE)

describe([
  'A function to evaluate the validity',
  'of an arithmetic expression'
].join(' '), function () {
  it([
    'should return true for',
    'valid expressions'
  ].join(' '), function () {
    const ƒ = require(FILE)
    const EXPRESSION = '(()())'

    expect(ƒ(EXPRESSION))
      .toBe(true)
  })

  it([
    'should return false for',
    'invalid expressions'
  ].join(' '), function () {
    const ƒ = require(FILE)
    let EXPRESSION = '(())())'

    expect(ƒ(EXPRESSION))
      .toBe(false)

    EXPRESSION = ')('
    expect(ƒ(EXPRESSION))
      .toBe(false)
  })
})
