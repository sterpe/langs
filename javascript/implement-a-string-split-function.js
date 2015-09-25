module.exports = function (s, delimiter) {
	"use strict";

	const A = [];
	let i, j, p;

	i = j = 0;
	p = "";

	while (i < s.length) {
		while (j < s.length && s.charAt(j) !== delimiter) {
			p += s.charAt(j++);
		}
		A.push(p);
		p = "";
		i = ++j;
		j = i;
	}

	return A;
};
