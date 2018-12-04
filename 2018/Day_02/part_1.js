const input = require('./input');

count = {}
input.forEach((str)=>{
  strArr = str.split('');
  strObj = {};
  strOutput =  new Set();
  strArr.forEach((char)=>{
    if (!strObj[char]) strObj[char] = 1;
    else strObj[char]++;
  });
  Object.keys(strObj).forEach((key)=>{
    if (strObj[key] > 1)
      strOutput.add(strObj[key]);
  });
  strOutput.forEach((val)=>{
    if (!count[val]) count[val] = 1;
    else count[val]++;
  });
});
let total = 1;
Object.keys(count).forEach((key)=>{
  total = count[key] * total;
});
console.log('Day 2 Part 1\nAnswer:', total);
