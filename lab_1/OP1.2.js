'use strict';
const a = { n: 2 };

function inc(num) {
    num.n++;
    return num;
}

inc(a);

console.dir({a});