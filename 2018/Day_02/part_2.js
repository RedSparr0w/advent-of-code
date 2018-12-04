const input = require('./input');

let answer = '';

for(i = 0; i < input.length; i++){
  let strArr = input[i].split('');
  for(c = i + 1; c < input.length; c++){
    let strArr2 = input[c].split('');
    let differences = 0;
    answer = '';
    for (m = 0; m < strArr.length; m++){
      if (strArr[m] != strArr2[m]) differences++;
      else answer += strArr[m];
    }
    if (differences <= 1) {
      console.log('Day 2 Part 2\nAnswer:', answer);
      process.exit();
    }
  }
}
