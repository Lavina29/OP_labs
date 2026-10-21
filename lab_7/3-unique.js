'use strict';

const unique = (array) => {
    const res = [];
    for (const item of array) {
        if (!res.includes(item)) {
            res.push(item);
        }
    }
    return res;
};
module.exports = { unique };

const result = unique([2, 1, 1, 3, 2]);
console.log(result);