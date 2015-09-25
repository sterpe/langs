const file = "../count-unique-words-without-split";
const S = "Swan swam over the sea swim Swan swim Swan";

jest.dontMock(file);

describe([
		"A function ƒ of a String which returns"
		, "the number of unique words in the string"
		, "without using String.prototype.split()."
	].join(" "), function () {
	it([
		"should return the count of unique"
		, "words in the input string."
	].join(" "), function () {
		const ƒ = require(file);

		String.prototype.split = jest.genMockFn();

		expect(ƒ(S)).toBe(4);

		// Prove to ourselves that the mock works.
		String.prototype.split.call(S, " ");
		S.split(" ");

		expect(String.prototype.split.mock.calls.length - 2)
			.toBe(0);

	});
});
