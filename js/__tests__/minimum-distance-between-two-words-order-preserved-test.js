/* global
  describe
  expect
  jest
  it
*/

'use strict'

const FILE = '../minimum-distance-between-two-words-order-preserved'

jest.dontMock(FILE)

describe([
  'A function to find the minimum',
  'distance between two words in a',
  'string, preserving the word order'
].join(' '), function () {
  it([
    'should find the minimum distance',
    'between two words in the string'
  ].join(' '), function () {
    const ƒ = require(FILE)
    let STRING = 'hello how are you'

    expect(ƒ(STRING, 'hello', 'you'))
      .toBe(3)
    STRING = 'hello how are hello you'
    expect(ƒ(STRING, 'hello', 'you'))
      .toBe(1)
  })
  it([
    'should return -1 if the word',
    'order doesn\'t support a match'
  ].join(' '), function () {
    const ƒ = require(FILE)
    const STRING = 'you are hello'

    expect(ƒ(STRING, 'hello', 'you'))
      .toBe(-1)
  })
})
