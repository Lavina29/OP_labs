'use strict';

function inc(n) {
    n.x++;
}

const a = { x: 17 };

const c = a;
console.dir(a);
inc(c);

console.dir(c);
