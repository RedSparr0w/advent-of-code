const input = require('./input');

const areaTaken = {};
let doubleBooked = new Set();

for(i = 0; i < input.length; i++){
  let [,id, x, y, width, height] = input[i].match(/#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/).map(m=>+m);
  for(w = 0; w < width; w++){
    if (!areaTaken[x + w]) areaTaken[x + w] = {};
    for(h = 0; h < height; h++){
      if (!areaTaken[x + w][y + h]) areaTaken[x + w][y + h] = [id];
      else doubleBooked.add(`${x+w}-${y+h}`);
    }
  }
}
console.log('Day 3 Part 1\nAnswer:', doubleBooked.size);
