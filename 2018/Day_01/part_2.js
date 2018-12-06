const input = require('./input');

console.time('Execution Time');

var frequency_history = new Set([0]);

function get_first_duplicate(start_frequency = 0){
  let frequency = start_frequency
  const found = input.some((change)=>{
    if (frequency_history.has(frequency += (+change))){
      return true;
    }
    frequency_history.add(frequency);
    return false;
  });

  if (!found){
    return get_first_duplicate(frequency);
  } else {
    return frequency;
  }
}

const frequency = get_first_duplicate();

console.timeEnd('Execution Time');
console.log('First duplicate frequency:', frequency);
