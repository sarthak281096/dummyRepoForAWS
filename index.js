const express = require('express');
const app = express();

app.get('/', (req,resp,next) => {
  resp.send('hello');
})

app.listen('3000', '0.0.0.0', () => {
  console.log('app started on port 3000');
})