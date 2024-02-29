/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
const { expect } = require('chai');
const assert = require('assert');

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('returns a resolved data promise', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch(done);
  }));

  // eslint-disable-next-line jest/no-commented-out-tests, jest/no-disabled-tests
  it.skip('fails to resolve', () => new Promise((done) => {
    getPaymentTokenFromAPI(false, (err) => {
      try {
        assert.strictEqual(err, 'Error');
        done();
      } catch (err) {
        done(err);
      }
    });
  }));
});
