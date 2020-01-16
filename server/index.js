const express = require('express');
const path = require('path');
const morgan = require('morgan');

const router = require('./controller.js');

const app = express();
const port = 3000;

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));

app.use(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));