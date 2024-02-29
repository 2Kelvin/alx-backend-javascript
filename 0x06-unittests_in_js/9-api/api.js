const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// cart id route
app.get('/cart/:id([0-9]+)', (res, req) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.listen(7865, () => console.log('API available on localhost port 7865'));

module.exports = app;
