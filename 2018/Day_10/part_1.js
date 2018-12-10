const stars = require('./input');

console.time('Execution Time');

let smallestBoundingBox = getBoundingBoxSize(stars);
while(smallestBoundingBox >= getBoundingBoxSize(stars)){
  smallestBoundingBox = getBoundingBoxSize(stars);
  for(let star = 0; star < stars.length; star++){
    stars[star].pos_x += stars[star].vel_x;
    stars[star].pos_y += stars[star].vel_y;
  }
}

function getBoundingBoxSize(stars){
  let min_x = max_x = stars[0].pos_x;
  let min_y = max_y = stars[0].pos_y;
  for(let star = 0; star < stars.length; star++){
    if (min_x > stars[star].pos_x) min_x = stars[star].pos_x;
    if (max_x < stars[star].pos_x) max_x = stars[star].pos_x;
    if (min_y > stars[star].pos_y) min_y = stars[star].pos_y;
    if (max_y < stars[star].pos_y) max_y = stars[star].pos_y;
  }
  return (max_x - min_x) * (max_y - min_y);
}

console.timeEnd('Execution Time');
console.log('Highest Score:', smallestBoundingBox);
