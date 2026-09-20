'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const name1 = { name: 'Anastasiia' };
  let name2 = { name: 'Anastasiia' };
  name1.name = 'Alise';
  name2.name = 'Hertha';
  const name3 = { name: 'Oksana' };
  name2 = name3;
};

module.exports = { fn };
