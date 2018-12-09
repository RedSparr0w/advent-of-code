console.time('Input Parse Time');
module.exports = `478 players; last marble is worth 71240 points`.match(/(\d+).+?(\d+)\spoints/).splice(1,2).map(Number);
console.timeEnd('Input Parse Time');
