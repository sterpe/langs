'use strict'

module.exports = function (matrix) {
	const M = matrix.length
	const N = M ? matrix[0].length : 0
	const list = []

	let n = N
	let m = M
	let x, y, i

	let I, Y
	I = Y = i = y = 0
	while (n > 0) {
		for (; i < n; i++) {
			list.push(matrix[y][i])
		}
		for (y++, i--; y < m; y++) {
			list.push(matrix[y][i])
		}
		x = n - 1
		for (i--, y--; x > 0; --x, --i) {
			list.push(matrix[y][i])
		}
		x = m - 2
		for (i++, --y; x > 0; --x, --y) {
			list.push(matrix[y][i])
		}
		i = ++I
		y = ++Y
		n -= 2
	}
	return list
}
