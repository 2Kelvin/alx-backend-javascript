const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// cart id route
app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

// get available_payments route
app.get('/available_payments', (req, res) => {
  res.send(
    {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    }
  );
});

// post login route
app.post('/login', (req, res) => {
  const userName = req.body.userName;
  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
    res.send(`Welcome`);
  }
});

app.listen(7865, () => console.log('API available on localhost port 7865'));

module.exports = app;
