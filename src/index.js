const express = require('express');
const routes = require('./routes');

const mongoose = require('mongoose');

const app = express();

mongoose
  .connect(
    'mongodb+srv://victor:ve9967bl@cluster0-votym.mongodb.net/RedeSocial?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('connection ok!');
  })
  .catch((error) => {
    console.log(error);
  });
app.use(express.json());

app.use(routes);
app.listen(8080);
