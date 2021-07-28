const path = require('path');
const express = require('express');

const app = express();

const apiRouter = require('./routes/apiRouter');

const PORT = 3000;

app.use(express.json());

app.use('./api', apiRouter);

