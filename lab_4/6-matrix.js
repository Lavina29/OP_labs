'use strict';

const max = (matrix) => {
  const arr = matrix
  .map((a) => a.reduce((a, b) => a > b ? a : b))
  .reduce((a, b) => a > b ? a : b)
    return arr
};

const a = max([[1, 2, 3], [14, 5, 6], [7, 8, 9]]);

console.log(a);
module.exports = { max };
