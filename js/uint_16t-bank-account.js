// You have some money in you bank account, the only function to
// withdraw money is `uint_16t withdraw(uint_16t value)`.  If `value`
// is greater than they money you have it returns 0, otherwise it
// withdraws the requested amount and returns the "value".

// Write a function that withdraws all your money.

"use strict";

const withdraw = require('./uint_16t-bank-account-withdraw');

module.exports = function () {
	let money = 0;
	let value = 65535;
	let withdrawal;

	while (value > 0) {
		while (withdrawal = withdraw(value)) {
			money += withdrawal;
		}
		value = Math.floor(value / 2);
	}

	return money;
};
	
