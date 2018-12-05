const input = require('./input');

let frequency = input.reduce((add, curr)=>{
  return (+add) + (+curr);
});

console.log('Final frequency:', frequency);
