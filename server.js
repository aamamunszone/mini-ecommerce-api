const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Mini E-Commerce API Server is Running!');
});

app.listen(port, () => {
  console.log(`Mini E-Commerce API is listening on port ${port}`);
});
