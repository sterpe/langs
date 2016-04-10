"use strict";

const K = [];

K[0] = [ ];
K[1] = [ '0', '1', '8' ];
K[2] = [ '00', '11', '69', '88', '96' ];

module.exports = function ƒ(k) {
	if (k < 3 || K[k]) {
		return K[k];
	}
	let i = 3;
	let j = k + 1;

	while (K[i]) {
		i++;
	}

	for (; i < j; ++i) {
		let q, r, x, y, g;

		K[i] = [ ];

		if (i % 2 !== 0) {
			x = i - 1;
			y = 1;
			g = function (x, y, q, r) {
				return K[x][q].slice(0, K[x][q].length/2) + K[y][r] + K[x][q].slice(K[x][q].length/2);
			};
		} else {
			x = i - 2;
			y = 2;
			g = function (x, y, q, r) {
				return K[y][r][0] + K[x][q] + K[y][r][1];
			};
		}

		for (q = 0; q < K[x].length; ++q) {
			for (r = 0; r < K[y].length; ++r) {
				K[i].push(g(x, y, q, r));
			}
		}
	}

	return K[k];
}
