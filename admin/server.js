const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/test', (req, res) => {
  res.send("app is running...");
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
