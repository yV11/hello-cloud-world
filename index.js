const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello (Cloud) World!');
});


app.listen(port, () => {
  console.log('[Info] web-app has been started.');
});
