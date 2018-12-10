const stars = require('./input');

console.time('Execution Time');

let smallestBoundingBox = getBoundingBoxSize(stars);
let seconds = 0;
while(smallestBoundingBox >= getBoundingBoxSize(stars)){
  smallestBoundingBox = getBoundingBoxSize(stars);
  nextPos();
}
//Previous tick was the smallest bounding box
prevPos();

function nextPos(){
  stars.forEach((star)=>{
    star.pos_x += star.vel_x;
    star.pos_y += star.vel_y;
  });
  seconds++;
}

function prevPos(){
  stars.forEach((star)=>{
    star.pos_x -= star.vel_x;
    star.pos_y -= star.vel_y;
  });
  seconds--;
}

function getBoundingBoxSize(stars){
  let min_x = stars[0].pos_x,
      max_x = stars[0].pos_x,
      min_y = stars[0].pos_y,
      max_y = stars[0].pos_y;

  stars.forEach((star)=>{
    if (min_x > star.pos_x) min_x = star.pos_x;
    if (max_x < star.pos_x) max_x = star.pos_x;
    if (min_y > star.pos_y) min_y = star.pos_y;
    if (max_y < star.pos_y) max_y = star.pos_y;
  });

  return (max_x - min_x) * (max_y - min_y);
}

console.timeEnd('Execution Time');
console.log('Seconds taken for stars to align:', seconds);
