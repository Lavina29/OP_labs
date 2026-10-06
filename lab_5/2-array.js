'use strict';

const array = () => {
    const arr = []
    const item = (i) => arr[i]
    item.push = (value) => {
        arr.push(value)
    }
    item.pop = () => {
        arr.pop()
    }
    return item
};

const arr = array()

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); 
console.log(arr(1)); 
console.log(arr(2));

module.exports = { array };
