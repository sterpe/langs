module.exports = function (array) {
	var m = array.length
	, t
	, i
	;

	while (m) {
		i = Math.floor(Math.random() * m--);
		t = array[m]
		array[m] = array[i];
		array[i] = t;
	}

	return array;
};

console.log(
module.exports(['A',2,3,4,5,6,7,8,9,10,'J','Q','K'])
);
