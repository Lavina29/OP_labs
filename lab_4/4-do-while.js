'use strict';

const sum = (...args) => {
  let res = 0
  let i = 0
  do{
    if (args.length === 0){
    res = 0
    return res
    }
    else{
      res += args[i]
      i++ 
    }
  }
  while (i < args.length)
  return res
};

console.log(sum())
console.log(sum(1, 2, 3))
module.exports = { sum };
