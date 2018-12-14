const learning_recipes = +require('./input');

console.time('Execution Time');
let e1 = 0,
    e2 = 1;
const recipes = [3, 7];
while (recipes.length < learning_recipes + 10){
  let v1 = recipes[e1],
      v2 = recipes[e2];
  recipes.push(...(`${v1 + v2}`).split('').map(Number));
  e1 = (e1 + recipes[e1] + 1) % recipes.length;
  e2 = (e2 + recipes[e2] + 1) % recipes.length;
}

console.timeEnd('Execution Time');
console.log(recipes.slice(learning_recipes).join(''));
