/* eslint-disable jest/valid-expect */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

// tests

describe('chai calculateNumber', () => {
  it('sum type', () => {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
  });

  it('substract type', () => {
    expect(calculateNumber('SUBTRACT', 5.9, 2.3)).to.equal(4);
    expect(calculateNumber('SUBTRACT', -5.9, -2.3)).to.equal(-4);
  });

  it('divide type', () => {
    expect(calculateNumber('DIVIDE', 8, 2)).to.equal(4);
    // expect(calculateNumber('DIVIDE', 5.0, 3.0)).toEqual(2);
  });

  it('zero divide', () => {
    expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', -8, 0)).to.equal('Error');
  });

  it('default error', () => {
    expect(() => calculateNumber('INVALID_TYPE', 1, 2)).to.throw(Error);
  });
});
