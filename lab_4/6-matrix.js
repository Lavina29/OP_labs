'use strict';

const max = (matrix) => {
  const x = matrix.reduce((a, b) => a > b ? a : b)
  return x.reduce((a, b) => a > b ? a : b)
};

const a = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

console.log(a);
module.exports = { max };
