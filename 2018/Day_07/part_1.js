const input = require('./input');

console.time('Execution Time');

let requirement = {};
let complete = {}
for (line in input){
  [, a, b] = input[line].match(/Step\s([A-Z]).+?([A-Z])/);
  if (!requirement[a])
    requirement[a] = [];
  if (!requirement[b])
    requirement[b] = [a];
  else
    requirement[b].push(a);
}

function requirementsComplete(key){
  let isComplete = true;
  requirement[key].forEach((letter)=>{
    if (!complete[letter])
      isComplete = false;
  });
  return isComplete;
}

function findNextLetter(){
  let nextLetter = false;
  Object.keys(requirement).sort().some((letter)=>{
    if (requirementsComplete(letter)){
       nextLetter = letter;
       return true;
     }
  })
  return nextLetter;
}

strOrder = '';
while (strOrder.length < 26){
  const nextLetter = findNextLetter();
  complete[nextLetter] = true;
  strOrder += nextLetter;
  delete requirement[nextLetter];
}

console.timeEnd('Execution Time');
console.log('Order:', strOrder);
