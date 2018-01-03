const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000; // optionally pulling port num from Heroku

app.use(express.static(publicPath));

app.get('*', (req, res) => { // serve public/index.html regardless of URL
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Express server is running');
})