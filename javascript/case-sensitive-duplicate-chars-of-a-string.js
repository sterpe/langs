"use strict";
module.exports = function ƒ(S) {
	const hash = {};
	let duplicates = "";
	let i;

	for (i = 0; i < S.length; i++) {
		let c = S.charAt(i);
		if (hash[c] === undefined) {
			hash[c] = 1;
		} else {
			hash[c] += 1;
			if (hash[c] === 2) {
				duplicates += c;
			}
		}
	}
	return duplicates;
};
