var rockPaperScissors = require('./rockPaperScissors');
var should = require('chai').should();

describe('rockPaperScissors', function() {
  it('should be defined', function() {
    should.exist(rockPaperScissors);
  });
  it('should be a function', function() {
    rockPaperScissors.should.be.a.Function;
  });
  it('should return an array', function() {
    rockPaperScissors().should.be.an.instanceOf(Array);
  });
  it('should return an array of arrays', function() {
    should.exist(rockPaperScissors()[0]);
    rockPaperScissors()[0].should.be.an.instanceOf(Array);
  });
  it('should contain every throw', function() {
    var expected = [['rock', 'rock', 'rock'], ['rock', 'rock', 'paper'],
      ['rock', 'rock', 'scissors'], ['rock', 'paper', 'rock'],
      ['rock', 'paper', 'paper'], ['rock', 'paper', 'scissors'],
      ['rock', 'scissors', 'rock'], ['rock', 'scissors', 'paper'],
      ['rock', 'scissors', 'scissors'], ['paper', 'rock', 'rock'],
      ['paper', 'rock', 'paper'], ['paper', 'rock', 'scissors'],
      ['paper', 'paper', 'rock'], ['paper', 'paper', 'paper'],
      ['paper', 'paper', 'scissors'], ['paper', 'scissors', 'rock'],
      ['paper', 'scissors', 'paper'], ['paper', 'scissors', 'scissors'],
      ['scissors', 'rock', 'rock'], ['scissors', 'rock', 'paper'],
      ['scissors', 'rock', 'scissors'], ['scissors', 'paper', 'rock'],
      ['scissors', 'paper', 'paper'], ['scissors', 'paper', 'scissors'],
      ['scissors', 'scissors', 'rock'], ['scissors', 'scissors', 'paper'],
      ['scissors', 'scissors', 'scissors']];
    var result = rockPaperScissors();
    result.length.should.equal(expected.length);
  });
});
