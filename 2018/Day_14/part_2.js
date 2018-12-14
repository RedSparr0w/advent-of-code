const learning_recipes = require('./input');

console.time('Execution Time');
const elves = [{current: 0}, {current: 1}];
const recipes = [3, 7];
while (!recipes.join('').includes(learning_recipes)){
  let loops = 0;
  while (loops <= 1000000){
    let new_recipes = sumCurrentRecipes().split('').map(Number);
    recipes.push(...new_recipes);
    moveToNextRecipe();
    loops++;
  }
}

console.timeEnd('Execution Time');
console.log(recipes.join('').indexOf(learning_recipes));

function sumCurrentRecipes(){
  let sum = 0;
  for(elf in elves){
    sum += recipes[elves[elf].current];
  }
  return `${sum}`;
}

function moveToNextRecipe(){
  for(elf in elves){
    elves[elf].current = (elves[elf].current + recipes[elves[elf].current] + 1) % recipes.length;
  }
  return;
}
