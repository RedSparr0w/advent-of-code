const input = require('./input');

var frequency_history = new Set([0]);

function get_first_duplicate(start_frequency = 0, loops = 1){
  var frequency = start_frequency
  var found = input.some((change)=>{
    if (frequency_history.has(frequency += (+change))){
      return true;
    }
    frequency_history.add(frequency);
    return false;
  });
  if (!found){
    return get_first_duplicate(frequency, loops + 1);
  } else {
    console.log('Total loops:', loops);
    return frequency;
  }
}
console.log('First duplicate frequency:', get_first_duplicate());
