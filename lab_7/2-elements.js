'use strict';

const removeElements = (array, ...items) => {
  for(const item of items){
    array.splice(array.findIndex(x => x === item), 1)
  }
  return array
};

const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);

module.exports = { removeElements };
