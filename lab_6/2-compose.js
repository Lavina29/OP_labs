'use strict';

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const compose = (...fns) => {
    const handlers = []
    for(const type of fns){
        if(typeof type !== "function"){
            throw new Error("type error")
        }
    }
    const f = (x) => {
        try{
            return fns.reduceRight((v, fn) => fn(v), x)
        } catch (error) {
            for (const handler of handlers){
                handler(error)
            }
            return undefined
        }
    }
    f.on = (name, handler) => {
        if (name === 'error') {
            handlers.push(handler)
        }
    }

    return f
}

const f = compose(cube, 0, inc);
console.log(f(5));