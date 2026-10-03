'use strict';

const methods = (iface) => {
  const result = []
  for(const [key, value] of Object.entries(iface)){
    if (typeof value === 'function'){
      result.push([key, value.length]);
    }
  }
  return result
};

const iface = {
  m1: (x) => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
  notFn: 42,
};

console.log(methods(iface));

module.exports = { methods };
