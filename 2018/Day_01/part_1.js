const input = require('./input');

var frequency = 0;
input.forEach((change)=>{
  frequency += (+change);
});
console.log('Final frequency:', frequency);
