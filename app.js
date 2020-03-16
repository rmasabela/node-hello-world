'use strict';

const http = require('express');

const HOST = '0.0.0.0';
const PORT = 3000;

const app = express();
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello World in Node.js');
});

app.listen(PORT, HOST, () => {
  console.log(`Running at http://${HOST}:${PORT}/`);
});