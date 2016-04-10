// Given two words, design an algorithm/flowchart and write 
// a function to print the letter(s) common to both words in 
// sorted order.  Make the function to perform a case 
// insensitive operation.

"use strict";

module.exports = function (word1, word2) {
	const hashMap = {};
	let S = "";
	let i;
	for (i = 0; i < word1.length; i++) {
		let c = word1.charAt(i);
		hashMap[c.toLowerCase()] = 1;
	}
	word2 = word2.split("").sort();
	for (i = 0; i < word2.length; ++i) {
		if (hashMap[word2[i].toLowerCase()]) {
			S += word2[i].toLowerCase();
		}
	}
	return S;
};
