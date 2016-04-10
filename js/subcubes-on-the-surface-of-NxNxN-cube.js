// Given a cube made of N x N x N sub-cubes, how many sub-cubes are
// on the outside of the cube?

// Consider the trivial case N = 1, the answer is 1.
// Consider the next trivial case N = 2

// The answer is 8 because the 2x2x2 cube is comprised of only 
// 8 subcubes, 1 @ each corner.

// Consider N = 3, we have 8 corner cubes, plus 1 cube in the 
// center of each of the composite cube's 6 faces, plus 1 cube 
// extra along the length of each of the main cube's 12 edges.

// Consider N = 4: 8 corner cubes, plus 4 cubes in the center
// of each face, plus the cubes between the corners on each of 
// the 12 sides is 2.

// It turns out that this can be described by the following 
// equation:

// ƒ(N) = 8 corner cubes + (6 faces * (N - 2)^2) + 12 sides * (N - 2)

"use strict";
module.exports = function (N) {
	let sides = 0;

	if (N === 1) {
		sides = 1;
	} else if (N > 1) {
		sides = 8 + (6 * Math.pow(N-2, 2)) + (12 * (N - 2));
	}
	return sides;
};
