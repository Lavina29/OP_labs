'use strict';

const hello = (person) => {
  console.log(`Hello, ${person.name}!`);
};

const Anastasia = { name: 'Anastasia' };
hello(Anastasia);

module.exports = { hello };
