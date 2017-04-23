/*
* Write a function that generates every sequence of throws a single player
* could throw for any number of rounds.
*/


function rockPaperScissors(rounds) {
// TODO: Your code here
  var plays = ['rock', 'paper', 'scissors'];
  var rounds = rounds || 3;
  var combos = [];

  var generateCombos = function (roundsToGo, playedSoFar) {
    playedSoFar = playedSoFar || [];

    if (roundsToGo === 0) {
      combos.push(playedSoFar);
      return;
    }

    for (var i = 0; i < plays.length; i++) {
      var currentPlay = plays[i];
      generateCombos(roundsToGo - 1, playedSoFar.concat(currentPlay));
    }

  };

  generateCombos(rounds);
  return combos;
}

module.exports = rockPaperScissors;
