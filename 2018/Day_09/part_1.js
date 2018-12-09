const [players, marbles] = require('./input');

console.time('Execution Time');

let multiple      = 23,
    removed       = 7,
    nextPlace     = 1,
    currentMarble = 0,
    placedMarbles = [0],
    scores        = {};

// Map the nodes
for(marble = 1; marble <= marbles; marble++){
  let player = marble % players;
  if (marble % multiple != 0){
    currentMarble = ((currentMarble + nextPlace) % placedMarbles.length) + 1;
    placedMarbles.splice(currentMarble, 0, marble);
  } else {
    currentMarble -= removed;
    if (currentMarble < 0)
      currentMarble += placedMarbles.length;
    if (!scores[player])
      scores[player] = 0;
    scores[player] += marble + placedMarbles.splice(currentMarble, 1)[0];
  }
}

let highestScore = 0;
Object.keys(scores).forEach((player)=>{
  if (scores[player] > highestScore)
    highestScore = scores[player];
});

console.timeEnd('Execution Time');
console.log('Highest Score:', highestScore);
