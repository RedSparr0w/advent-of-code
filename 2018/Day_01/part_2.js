const input = require('./input');

var frequency_history = [];

function get_first_duplicate(start_frequency, tries = 1){
  var frequency = start_frequency
  var found = input.some((change)=>{
    if (frequency_history.includes(frequency += (+change))){
      return true;
    }
    frequency_history.push(frequency);
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
