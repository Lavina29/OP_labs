'use strict';

const sum = (...args) => {
  let res = 0
  let i = 0
  while (i < args.length){
    res += args[i]
    i++
  }
  return res
};
console.log(sum())
console.log(sum(1, 2, 3))
module.exports = { sum };
