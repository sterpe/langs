const FILE = "../all-nearest-smaller-values";
const VAN_DER_CORPUT_SEQ = [ 0, 8, 4, 12, 2, 10, 6, 14, 1, 9
	, 5, 13, 3, 11, 7, 15 ];

jest.dontMock(FILE);

describe([
		'All nearest smaller values problem.'

].join(" "), function () {
	it([
		'should return an array of values representing'
		, 'the nearest smaller value to each element'
		, 'of the input array.'

	].join(" "), function () {
		const ƒ = require(FILE);

		expect(ƒ(VAN_DER_CORPUT_SEQ)).toEqual([
			null, 0, 0, 4, 0, 2, 2, 6, 0, 1, 1
			, 5, 1, 3, 3, 7
		]);
	});
});
