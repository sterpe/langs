/* global
  jest,
  describe,
  it,
  expect
*/

'use strict'

const FILE = '../curl-an-m-x-n-array'

jest.dontMock(FILE)

describe(['curl-an-m-x-n-array'
].join(' '),
function () {
  it(['should return the values of an',
    'M x N array in curl order'
  ].join(' '),
  function () {
    const ƒ = require(FILE)
    expect(ƒ([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
      .toBe([
        1, 2, 3, 6, 9, 8, 7, 4, 5
      ])
  })
})
