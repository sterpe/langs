/* global
  describe
  expect
  jest
  it
*/

'use strict'

const FILE = '../naive2'

jest.dontMock(FILE)

describe([
  'A naive pattern matching algorithm'
].join(' '), function () {
  it([
    'should return a list of',
    'indexes where the pattern',
    'was matched.'
  ].join(' '), function () {
    const ƒ = require(FILE)
    const text = 'THIS IS A TEST TEXT'
    const pattern = 'TEST'

    expect(ƒ(pattern, text)).toEqual([
      10
    ])
  })
})
