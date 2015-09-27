"use strict";

const K = [];

K[0] = [ ];
K[1] = [ '0', '1', '8' ];
K[2] = [ '00', '11', '69', '88', '96' ];

module.exports = function ƒ(k) {
	if (k < 3) {
		return K[k];
	}
	let i = 3;
	let j = k + 1;

	for (; i < j; ++i) {
		let q = 0;
		let r = 0;
		K[i] = [ ];
		if (i % 2 !== 0) {

			for (; q < K[i - 1].length; ++q, r = 0) {
				for (; r < K[1].length; ++r) {
					K[i].push(K[i - 1][q].slice(0, (K[i - 1][q].length/2)) + K[1][r] + K[i -1][q].slice((K[i - 1][q].length/2)));
				}
			}
		} else {
			for (; q < K[i - 2].length; ++q, r = 0) {
				for (; r < K[2].length; ++r) {
					K[i].push(K[2][r][0] + K[i - 2][q] + K[2][r][1]);
				}
			}
		}
	}
	return K[k];
};
