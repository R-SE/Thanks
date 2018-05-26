const express = require('express');
const bodyParser = require('body-parser');
const { getAll, addShoutout, like } = require('../database-mongo');

const app = express();
app.use(bodyParser());
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/shoutouts', (req, res) => {
  getAll()
  .then(thanks => res.send((thanks)))
  .catch(err => res.send(err));
});

app.post('/shoutouts', (req, res) => {
  addShoutout(req.body)
  .then(data => res.send((`Added your shoutout!`)))
  .catch(err => res.send(err));
});

app.post('/likeshoutout', (req, res) => {
  like(req.body.id)
  .then(data => res.send(data))
  .catch(err => res.send(err));
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});