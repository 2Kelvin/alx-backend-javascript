/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

// tests

describe('calculateNumber', () => {
  it('Number point zero', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });
  it('mixed numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });
  it('both floats', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });
  it('a is float', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });
  it('a negative', () => {
    assert.equal(calculateNumber(-1.2, 3.8), 3);
  });
  it('b float', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });
  it('zero', () => {
    assert.equal(calculateNumber(0, 0), 0);
  });
  it('almost same', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });
  it('large a and b', () => {
    assert.equal(calculateNumber(1000000000.2, 3000000000.8), 4000000001);
  });
  it('many floats', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
  it('other cases', () => {
    assert.equal(calculateNumber(0.4, 0.6), 1);
    assert.equal(calculateNumber(0.49, 0.51), 1);
    assert.equal(calculateNumber(-0.4, -0.6), -1);
    assert.equal(calculateNumber(-0.49, -0.51), -1);
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });
});