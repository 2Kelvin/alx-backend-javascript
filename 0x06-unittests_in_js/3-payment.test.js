/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable prefer-destructuring */
const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('testing Utils calculateNumber method', () => {
    const theSpy = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(theSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(theSpy.calculateNumber.callCount).to.be.equal(1);
    theSpy.calculateNumber.restore();
  });
});
