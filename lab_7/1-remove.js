'use strict';
// Remove item from array modifying original array

const removeElement = (array, item) => {
  array.splice(array.findIndex(x => x === item), 1)
  return array
};

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);

// const arra = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
// removeElement(arra, 'Lima'); 
// removeElement(arra, 'Berlin');
// console.log(arra);

module.exports = { removeElement };
