"use strict";

const FILE = "../k-length-rotational-symmetric-values";
const K = [ ];

K[0] = [ ];
K[1] = [ '0', '1', '8' ];
K[2] = [ '00', '11', '69', '88', '96' ];
K[3] = [ '000', '010', '080', '101', '111', '181', '609', '619', '689'
	, '808', '818', '888', '906', '916', '986' ];
K[4] = [ '0000', '1001', '6009', '8008', '9006'
	, '0110', '1111', '6119', '8118', '9116'
	, '0690', '1691', '6699', '8698', '9696'
	, '0880', '1881', '6889', '8888', '9886'
	, '0960', '1961', '6969', '8968', '9966'
];

jest.dontMock(FILE);

describe([
		"a function ƒ(k) which returns all"
		, "rotationally symmetric values of k-length"
].join(" "), function () {
	it([
		"should return the list of rotationally"
		, "symmetric values of k-length for a"
		, "given k"
	].join(" "), function () {
		const ƒ = require(FILE);

		let i = 0;

		for(; i < K.length; ++i) {
			expect(ƒ(i)).toEqual(K[i]);
		}
	});
});
