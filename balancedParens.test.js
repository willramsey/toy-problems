const balancedParens = require('./balancedParens');
const should = require('chai').should();

describe('balancedParens', function() {
  it('should exist', function() {
    should.exist(balancedParens);
  });
  it('should be a function', function() {
    balancedParens.should.be.a.Function;
  });
  it('should return a boolean', function() {
    var result = balancedParens('()');
    should.exist(result);
    result.should.be.a.Boolean;
  });
  describe('step 1', function() {
    it('should return true for ()', function() {
      balancedParens('()').should.be.true;
    });
    it('should return false for (', function() {
      balancedParens('(').should.be.false;
    });
    it('should return false for )', function() {
      balancedParens(')').should.be.false;
    });
    it('should return false for )(', function() {
      balancedParens(')(').should.be.false;
    });
    it('should return true for (())', function() {
      balancedParens('(())').should.be.true;
    });
    it('should return false for ))))))))))((((((((((', function() {
      balancedParens('))))))))))((((((((((').should.be.false;
    });
    it('should return true for (((((((((())))))))))', function() {
      balancedParens('(((((((((())))))))))').should.be.true;
    });
    it('should return false for ())()(()', function() {
      balancedParens('())()(()').should.be.false;
    });
    it('should return true for (())()(())', function() {
      balancedParens('(())()(())').should.be.true;
    });
  });
});
