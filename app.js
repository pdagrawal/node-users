const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.render();
});

app.get('/users', (req, res, next) => {
  res.render();
});

app.post('/users', (req, res, next) => {
  res.redirect('/users');
});

app.listen(3000);
