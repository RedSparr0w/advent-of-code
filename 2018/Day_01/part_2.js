const input = require('./input');

var frequency_history = new Set([0]);

function get_first_duplicate(start_frequency, tries = 1){
  var frequency = start_frequency
  var found = input.some((change)=>{
    if (frequency_history.has(frequency += (+change))){
      return true;
    }
    frequency_history.add(frequency);
    return false;
  });
  console.log('Tries:', tries);
  if (!found){
    get_first_duplicate(frequency, tries + 1);
  } else {
    console.log('First duplicate frequency:', frequency);
  }
}
get_first_duplicate(0);
