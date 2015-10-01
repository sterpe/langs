const FILE = '../modify-matrix-of-Xs.js';

const MATRIX_A = [
	[ '-', '-', '-', '-', '-' ]
	, [ '-', '-', '-', '-', '-' ]
	, [ '-', '-', '-', 'x', '-' ]
	, [ 'x', '-', '-', '-', '-' ]
	, [ '-', '-', '-', '-', '-' ]
];

const MATRIX_B = [
	[ 'x', '-', '-', 'x', '-' ]
	, [ 'x', '-', '-', 'x', '-' ]
	, [ 'x', 'x', 'x', 'x', 'x' ]
	, [ 'x', 'x', 'x', 'x', 'x' ]
	, [ 'x', '-', '-', 'x', '-' ]
];

jest.dontMock(FILE);

describe([
		"A function ƒ of an N x M matrix"
		, "which returns a new matrix where"
		, "each column or row that contained"
		, "an `x` is filled with `x`'s"
].join(" "), function () {
	it([
		"should return a new matrix where the"
		, "the rows and columns that contained"
		, "any `x` are completely filled with"
		, "`x`'s"
	].join(" "), function () {
		const ƒ = require(FILE);

		expect(ƒ(MATRIX_A)).toEqual(MATRIX_B);
	});
});
