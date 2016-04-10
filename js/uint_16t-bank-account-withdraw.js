"use strict";

let money = 100001;
module.exports = function (value) {
	if (money >= value) {
		money -= value;
		return value;
	} else {
		return 0;
	}
};
