'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */
const phonebook = [
  { name: 'Anastasiia', phone: '+380962222229' },
  { name: 'Mariia', phone: '+380123456789' },
];

const findPhoneByName = (name) => {
  for (const pearson in phonebook) {
    if (pearson.name === name) {
      return pearson.phone;
    }
  }
};

module.exports = { phonebook, findPhoneByName };
