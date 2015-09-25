const file = "../implement-a-string-split-function";
const S = "Swan swam across the sea swim Swan swim Swan";

jest.dontMock(file);

describe([
		'A function ƒ that takes as input a String'
		, 'and a delimiter and produces as output'
		, 'an array of substrings split from the'
		, 'delimiter'

].join(" "), function () {
	it([
		'should split the input string along'
		, 'the delimiter'

	].join(" "), function () {
		var ƒ = require(file);

		expect(ƒ(S, " ")).toEqual(S.split(" "));
	});
});
