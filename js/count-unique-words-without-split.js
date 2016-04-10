// Return the count of unique words in an input 
// string without using the String.prototype.split()
// method.

// Input: "Swan swam over the sea swim Swan swim Swan"
// Output: 4

module.exports = function (s) {
	"use strict";

	let count = 0;
	let word;

	while (word = /^\s*(\S\S*)/.exec(s)) {
		word = word[1];
		let re = new RegExp('\\b' + word + '\\b', 'i');
		s = s.replace(re, '');
		if (re.exec(s) === null) {
			count++;
		}
		s = s.replace(new RegExp('\\b' + word + '\\b', 'ig'), '');
	}

	return count;
};
