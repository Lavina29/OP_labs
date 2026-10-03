'use strict';
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


const generateKey = (length, characters) => {
  let password = '';
  for(let i = 0; i < length; i++){
    password += characters [random(characters.length)];
  }
  return password;
}
module.exports = { generateKey };
