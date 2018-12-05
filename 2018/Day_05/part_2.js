let input = require('./input');

let alphabet =  'qwertyuiopasdfghjklzxcvbnm'.split('');
let lowestLength;
for(i = 0; i < alphabet.length; i++){
  let reg = new RegExp(`${alphabet[i]}`,'gi');
  let tempInput = input.replace(reg, '');
  let previousLength = 0;
  while (tempInput.length != previousLength){
    previousLength = tempInput.length;
    tempInput = tempInput.replace(/(aA|bB|cC|dD|eE|fF|gG|hH|iI|jJ|kK|lL|mM|nN|oO|pP|qQ|rR|sS|tT|uU|vV|wW|xX|yY|zZ|Zz|Yy|Xx|Ww|Vv|Uu|Tt|Ss|Rr|Qq|Pp|Oo|Nn|Mm|Ll|Kk|Jj|Ii|Hh|Gg|Ff|Ee|Dd|Cc|Bb|Aa)/g,'');
  }
  if (!lowestLength || tempInput.length < lowestLength)
    lowestLength = tempInput.length;
}

console.log('Final length:', lowestLength);
