let input = require('./input');

console.time('Execution Time');

let index      = 0,
    mdataValue = 0;

// Map the nodes
while (input.length > 0){
  let [childrenLength, metadataLength] = [input[index], input[index + 1]];
  if (childrenLength){
    index += 2;
  } else {
    input[index - 2]--;
    input.splice(index, 2);
    mdataValue += input.splice(index, metadataLength).reduce((a,b)=>a+b);
    index      = 0;
  }
}

console.timeEnd('Execution Time');
console.log('Metadata sum:', mdataValue);
