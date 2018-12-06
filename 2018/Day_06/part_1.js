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

const max_distance = bounds.max_x - bounds.min_x > bounds.max_y - bounds.min_y ? bounds.max_x - bounds.min_x : bounds.max_y - bounds.min_y;

const area = {};
for(distance = 0; distance < max_distance; distance++){
	for (id in coords){
		const {x, y} = coords[id];
		for (x_offset = 0; x_offset <= distance; x_offset++){
			y_offset = distance - x_offset;
			if (!area[x - x_offset]){area[x - x_offset] = {};}
			if (!area[x + x_offset]){area[x + x_offset] = {};}
			// spot hasn't been claimed yet, no need to check distance
			if (!area[x - x_offset][y - y_offset]){
				area[x - x_offset][y - y_offset] = {id, distance};
			} else {
				if (area[x - x_offset][y - y_offset].id != id && area[x - x_offset][y - y_offset].distance == distance){
					area[x - x_offset][y - y_offset].id = undefined;
				}
			}
			if (!area[x - x_offset][y + y_offset]){
				area[x - x_offset][y + y_offset] = {id, distance};
			} else {
				if (area[x - x_offset][y + y_offset].id != id && area[x - x_offset][y + y_offset].distance == distance){
					area[x - x_offset][y + y_offset].id = undefined;
				}
			}
			if (!area[x + x_offset][y - y_offset]){
				area[x + x_offset][y - y_offset] = {id, distance};
			} else {
				if (area[x + x_offset][y - y_offset].id != id && area[x + x_offset][y - y_offset].distance == distance){
					area[x + x_offset][y - y_offset].id = undefined;
				}
			}
			if (!area[x + x_offset][y + y_offset]){
				area[x + x_offset][y + y_offset] = {id, distance};
			} else {
				if (area[x + x_offset][y + y_offset].id != id && area[x + x_offset][y + y_offset].distance == distance){
					area[x + x_offset][y + y_offset].id = undefined;
				}
			}
		}
	}
}

const areaSize = {};
const exlcudedId = new Set([undefined]);
for (x in area){
	for (y in area[x]){
		if (exlcudedId.has(area[x][y].id)){
			continue;
		}
		if (x <= bounds.min_x || x >= bounds.max_x || y <= bounds.min_y || y >= bounds.max_y){
			exlcudedId.add(area[x][y].id);
			continue;
		}
		if (!areaSize[area[x][y].id]){
			areaSize[area[x][y].id] = 0;
		}
		areaSize[area[x][y].id]++;
	}
}

let largestAreaSize = 0;
for (id in areaSize){
	if (areaSize[id] > largestAreaSize)
		largestAreaSize = areaSize[id];
}

console.timeEnd('Execution Time');
console.log('Largest Area:', largestAreaSize);
