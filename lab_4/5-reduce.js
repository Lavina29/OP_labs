'use strict';

const sum = (...args) => {
    if (args.length === 0){
        return 0
    }
    return args.reduce((x, y)=> x + y, 0)
}
console.log(sum())
console.log(sum(1, 2, 3))

module.exports = { sum };
