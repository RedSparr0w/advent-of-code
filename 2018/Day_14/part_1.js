const learning_recipes = +require('./input');

console.time('Execution Time');
let e1 = 0,
    e2 = 1;
const recipes = [3, 7];
while (recipes.length < learning_recipes + 10){
  let new_recipes = sumCurrentRecipes().split('').map(Number);
  recipes.push(...new_recipes);
  moveToNextRecipe();
}

console.timeEnd('Execution Time');
console.log(recipes.slice(learning_recipes).join(''));

function sumCurrentRecipes(){
  let sum = 0;
  sum += recipes[e1];
  sum += recipes[e2];
  return `${sum}`;
}

function moveToNextRecipe(){
  e1 = (e1 + recipes[e1] + 1) % recipes.length;
  e2 = (e2 + recipes[e2] + 1) % recipes.length;
  return;
}
