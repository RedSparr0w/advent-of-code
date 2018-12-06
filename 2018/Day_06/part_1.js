//const input = require('./input');
const input = `1, 1
1, 6
8, 3
3, 4
5, 5
8, 9`.split('\n');

console.time('Execution Time');

const bounds = {};

for (id in input){
	[x, y] = input[id].split(', ');
  if (bounds.min_x === undefined || x < bounds.min_x)
    bounds.min_x = x;
  if (bounds.min_y === undefined || y < bounds.min_y)
    bounds.min_y = y;
  if (bounds.max_x === undefined || x > bounds.max_x)
    bounds.max_x = x;
  if (bounds.max_y === undefined || y > bounds.max_y)
    bounds.max_y = y;
}
console.log(bounds);

console.timeEnd('Execution Time');
console.log('Largest Area:', undefined);
