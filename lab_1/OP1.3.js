'use strict';

//const obj = [true, 'hello', 5, 12, -200, false, false, 'word']
const obj = [true, 'hello', 5, 12, -200, false, 'word', null, undefined, 3.14, 'test', 0, NaN, 100, 'JS', true, -7, 'text', 42, false, 29, "Anastasiia"]
//console.log(typeof obj, obj.length)
const hash = {};

for ( const item of obj){
    console.log(item)
    if (typeof item === 'boolean'){
        hash.boolean = (hash.boolean ?? 0) + 1;
    }
    else if (typeof item === 'number'){
         hash.number = (hash.number ?? 0) + 1;
    }
    else if (typeof item === 'string'){
        hash.string = (hash.string ?? 0) + 1;
    }
}
console.log({hash})
