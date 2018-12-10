const stars = require('./input');

console.time('Execution Time');

let smallestBoundingBox = getBoundingBoxSize(stars);
while(smallestBoundingBox >= getBoundingBoxSize(stars)){
  smallestBoundingBox = getBoundingBoxSize(stars);
  nextPos();
}
//Previous tick was the smallest bounding box
prevPos();

function nextPos(){
  for(star in stars){
    stars[star].pos_x += stars[star].vel_x;
    stars[star].pos_y += stars[star].vel_y;
  }
}

function prevPos(){
  stars.forEach((star)=>{
    star.pos_x -= star.vel_x;
    star.pos_y -= star.vel_y;
  });
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

function logText(char = 'X'){
  let x_value = Object.keys(stars).map((star)=>stars[star].pos_x),
      y_value = Object.keys(stars).map((star)=>stars[star].pos_y);

  let min_x = Math.min(...x_value),
      min_y = Math.min(...y_value),
      max_x = Math.max(...x_value),
      max_y = Math.max(...y_value);

  let myArr = []
  for (y = 0; y <= max_y - min_y; y++){
    myArr[y] = [];
    for (x = 0; x <= max_x - min_x; x++){
      myArr[y][x] = ' ';
    }
  }

  for(star in stars){
    myArr[stars[star].pos_y - min_y][stars[star].pos_x - min_x] = char;
  }

  for(x in myArr){
   console.log(myArr[x].join(''));
  }
}

console.timeEnd('Execution Time');
logText('X');
