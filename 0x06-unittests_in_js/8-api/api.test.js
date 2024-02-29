const request = require('request');
const { expect } = require('chai');

describe('api test', () => {
  const url = 'http://localhost:7865';

  it('returns route text', (done) => {
    request.get(`${url}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
