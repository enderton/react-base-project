'use strict';

const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

// eslint-disable-next-line no-console
app.listen(8889, () => { console.log('Server listening at port 8889'); });

module.exports = app;
