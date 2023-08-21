require('dotenv').config();
const express = require('express');
const { chats } = require('./data/data');

const app = express();

app.get('/', (req, res) => {
  res.send(chats);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('server listening on port ' + PORT);
});
