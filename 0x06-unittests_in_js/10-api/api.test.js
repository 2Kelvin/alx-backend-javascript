const request = require('request');
const { expect } = require('chai');

describe('api test', () => {
  const url = 'http://localhost:7865';

  it('home route test', (done) => {
    request.get(`${url}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('correct cart id', (done) => {
    request.get(`${url}/cart/88`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 88');
      done();
    });
  });

  it('negative cart id', (done) => {
    request.get(`${url}/cart/-63`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('non-number cart id', (done) => {
    request.get(`${url}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('login route', (done) => {
    request.post(`${url}/login`, { json: { userName: 'Chris' } }, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Chris');
      done();
    });
  });

  it('available_payments route', (done) => {
    request.get(`${url}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  });
});
