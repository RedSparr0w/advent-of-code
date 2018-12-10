const [players, marbles] = require('./input');

console.time('Execution Time');

addMarble = function(value, board){
  const marble = {
    value,
    prev: board,
    next: board.next,
  };
  board.next.prev = marble,
  board.next = marble;
  return marble;
}

scored = function(board){
  board = board.prev.prev.prev.prev.prev.prev;
  let score = board.prev.value;
  board.prev.prev.next = board,
  board.prev = board.prev.prev;
  return [score, board];
}

class MarbleGame {
  constructor(){
    this.value = 0,
    this.prev = this,
    this.next = this;
  }
}

let multiple      = 23,
    placedMarbles = new MarbleGame(),
    scores        = {};

// Map the nodes
for(marble = 1; marble <= marbles * 100; marble++){
  let player = marble % players;
  if (marble % multiple != 0){
    placedMarbles = addMarble(marble, placedMarbles.next);
  } else {
    if (!scores[player]) scores[player] = 0;
    [score, placedMarbles] = scored(placedMarbles);
    scores[player] += marble + score;
  }
}

let highestScore = Math.max(...Object.values(scores));

console.timeEnd('Execution Time');
console.log('Highest Score:', highestScore);
