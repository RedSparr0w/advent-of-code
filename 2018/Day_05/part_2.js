let input = require('./input');

console.time('Execution Time');

let alphabet =  'abcdefghijklmnopqrstuvwxyz'.split('');
let lowestLength = input.length;
for(i = 0; i < alphabet.length; i++){
  let reg = new RegExp(`${alphabet[i]}`,'gi');
  let tempInput = input.replace(reg, '');
  let previousLength = 0;
  while (tempInput.length != previousLength){
    previousLength = tempInput.length;
    tempInput = tempInput.replace(/(Aa|Bb|Cc|Dd|Ee|Ff|Gg|Hh|Ii|Jj|Kk|Ll|Mm|Nn|Oo|Pp|Qq|Rr|Ss|Tt|Uu|Vv|Ww|Xx|Yy|Zz|aA|bB|cC|dD|eE|fF|gG|hH|iI|jJ|kK|lL|mM|nN|oO|pP|qQ|rR|sS|tT|uU|vV|wW|xX|yY|zZ)/g,'');
  }
  if (tempInput.length < lowestLength)
    lowestLength = tempInput.length;
}

console.timeEnd('Execution Time');
console.log('Final length:', lowestLength);
