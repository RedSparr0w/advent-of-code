const input = require('./input');

console.time('Execution Time');

const coords = {};
for (id in input){
	[x, y] = input[id].split(', ');
	coords[id] = {x: +x, y: +y};
}

const bounds = {};
for (id in coords){
	const {x, y} = coords[id];
  if (bounds.min_x === undefined || x < bounds.min_x)
    bounds.min_x = x;
  if (bounds.min_y === undefined || y < bounds.min_y)
    bounds.min_y = y;
  if (bounds.max_x === undefined || x > bounds.max_x)
    bounds.max_x = x;
  if (bounds.max_y === undefined || y > bounds.max_y)
    bounds.max_y = y;
}

const maxTotalDistance = 10000;
let regionSizeWithinDistance = 0;
for (x = bounds.min_x; x <= bounds.max_x; x++){
	for (y = bounds.min_y; y <= bounds.max_y; y++){
		totalDistance = 0;
		for(id in coords){
			totalDistance += Math.abs(x - coords[id].x) + Math.abs(y - coords[id].y);
		}
		if (totalDistance < maxTotalDistance){
			regionSizeWithinDistance++;
		}
	}
}

console.timeEnd('Execution Time');
console.log('Region Size Within Distance:', regionSizeWithinDistance);
