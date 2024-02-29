/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

// tests

describe('calculateNumber with type', () => {
  it('sum type', () => {
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.equal(calculateNumber('SUM', -1.2, -3.7), -5);
  });

  it('subtract type', () => {
    assert.equal(calculateNumber('SUBTRACT', 5.9, 2.3), 4);
    assert.equal(calculateNumber('SUBTRACT', -5.9, -2.3), -4);
  });

  it('divide type', () => {
    assert.equal(calculateNumber('DIVIDE', 8, 2), 4);
    // assert.equal(calculateNumber('DIVIDE', 5.0, 3.0), 2);
  });

  it('error divide', () => {
    assert.equal(calculateNumber('DIVIDE', 4, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', -8, 0), 'Error');
  });

  it('no type', () => {
    assert.throws(() => calculateNumber('INVALID_TYPE', 1, 2), Error);
  });
});
