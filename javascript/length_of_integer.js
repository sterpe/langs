module.exports = function () {
	var i = 10;
	var q = 0;
	var p, j;
	while ( i) {
		p = i.toString().split("");
		j = 0;
		while (p.length > 1) {
			p = p.reduce(function (sum, num) {
				return sum * parseInt(num);
			}, 1);
			p = p.toString().split("");
			j += 1;
		}
		if (j > q) {
			q = j;
			console.log("max ", q, " ", i);
		}
		i += 1;
	}
};
module.exports();
