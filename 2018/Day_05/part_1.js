let input = require('./input');

previousLength = 0;
while (input.length != previousLength){
  previousLength = input.length;
  input = input.replace(/(aA|bB|cC|dD|eE|fF|gG|hH|iI|jJ|kK|lL|mM|nN|oO|pP|qQ|rR|sS|tT|uU|vV|wW|xX|yY|zZ|Zz|Yy|Xx|Ww|Vv|Uu|Tt|Ss|Rr|Qq|Pp|Oo|Nn|Mm|Ll|Kk|Jj|Ii|Hh|Gg|Ff|Ee|Dd|Cc|Bb|Aa)/g,'');
}

console.log('Final length:', input.length);
