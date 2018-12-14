const learning_recipes = require('./input');

console.time('Execution Time');
let e1 = 0,
    e2 = 1;
const recipes = [3, 7];
while (!recipes.join('').includes(learning_recipes)){
  let loops = 0;
  while (loops <= 1000000){
    let v1 = recipes[e1],
        v2 = recipes[e2];
    recipes.push(...(`${v1 + v2}`).split('').map(Number));
    e1 = (e1 + recipes[e1] + 1) % recipes.length;
    e2 = (e2 + recipes[e2] + 1) % recipes.length;
    loops++;
  }
}

console.timeEnd('Execution Time');
console.log(recipes.join('').indexOf(learning_recipes));
