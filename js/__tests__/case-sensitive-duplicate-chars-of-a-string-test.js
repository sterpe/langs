"use strict";
const FILE = "../case-sensitive-duplicate-chars-of-a-string";
const S = "AABBCcDdww";

jest.dontMock(FILE);

describe([
		"A function ƒ(S) that returns a string"
		, "that contains a case-sensitive single"
		, "instance of characters that are duplicated."
].join(" "), function () {
	it([
		"should return a string of the duplicated"
		, "characters in the input string"
	].join(" "), function () {
		const ƒ = require(FILE);

		expect(ƒ(S)).toBe("ABw");
	});
});
