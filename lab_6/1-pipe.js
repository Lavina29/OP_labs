'use strict';

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const pipe = (...fns) => {
    for (const type of fns){
        if (typeof type !== "function"){
            throw new Error("type error")
        }
    }
     return (x) => fns.reduce((v, f) => f(v), x)
}

const f = pipe(inc, 0)

console.log(f(7))


module.exports = { pipe };
