const FILE = '../subcubes-on-the-surface-of-NxNxN-cube.js';

jest.dontMock(FILE);

describe([
		'A function ƒ(N) which returns the subcubes on the'
		, 'surface of an N x N x N cube.'
].join(" "), function () {
	it([
		'should return the # of subcubes on the surface'
		, 'of an N x N x N cube for a given N'
	].join(" "), function () {
		const ƒ = require(FILE);

		expect(ƒ(0)).toBe(0);
		expect(ƒ(1)).toBe(1);
		expect(ƒ(2)).toBe(8);
		expect(ƒ(3)).toBe(26);
	});
});
