'use strict'

module.exports = function (W) {
  const T = []
  let pos = 2
  let cnd = 0

  T[0] = -1
  T[1] = 0

  while (pos < W.length) {
    if (W.charAt(pos - 1) === W.charAt(cnd)) {
      ++cnd
      T[pos] = cnd
      ++pos
    } else if (cnd > 0) {
      cnd = T[cnd]
    } else {
      T[pos] = 0
      pos++
    }
  }
  return T
}
