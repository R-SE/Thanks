const express = require('express');
const bodyParser = require('body-parser');
const { getAll, addShoutout } = require('../database-mongo');

const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/items', (req, res) => {
  getAll()
  .then(thanks => res.send((thanks)))
  .catch(err => res.send(err));
});

app.post('/items', (req, res) => {
  addShoutout(shoutout)
  .then(data => res.send((`Added your shoutout!`)))
  .catch(err => res.send(err));
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});