const express = require('express');

const app = express();

// root route
app.get('/', (req, res) => {
  // response text for root route
  res.send('Hello Holberton School!');
});

// express server listening on port 1245
app.listen(1245);

module.exports = app;
