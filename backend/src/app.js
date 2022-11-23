const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json());//Possibilita trabalhar com request.body de requisições .json
app.use(router);

module.exports = app;