const input = require('./input');

console.time('Execution Time');

let frequency = input.reduce((add, curr)=>{
  return (+add) + (+curr);
});

console.timeEnd('Execution Time');
console.log('Final frequency:', frequency);
