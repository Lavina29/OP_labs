'use strict';

const sum = (...args) => {
  let res = 0
  for (const i of args) {
    res += args[i-1]
  }
  return res;
};

console.log(sum())
console.log(sum(1, 2, 3))
module.exports = { sum };
