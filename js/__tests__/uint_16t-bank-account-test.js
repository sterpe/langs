const FILE = "../uint_16t-bank-account";

jest.dontMock(FILE);
jest.setMock("../withdraw", (function () {
	let money = 100000;
	return function (value) {
		if (money >= value) {
			money -= value;
			return value;
		} else {
			return 0;
		}
	};
}());

