module.exports = function (A) {
	"use strict";
	const result = []
	, S = []
	let i = 0;
	for (; i < A.length; i++) {
		let x = A[i];
		while (S.length > 0 && S[S.length - 1] >= x) {
			S.pop();
		}
		if (S.length === 0) {
			// x has no preceding smaller value
			result.push(null);
		} else {
			// the nearest smaller value to `x` is
			// the top element of S
			result.push(S[S.length - 1]);
		}
		S.push(x);
	}
	
	return result;
};
