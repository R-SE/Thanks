const mongoose = require('mongoose');
const { MLAB } = require('../config.js');
mongoose.connect(MLAB);

const db = mongoose.connection;
db.on('error', () => console.log('mongoose connection error'));
db.once('open', () => console.log('mongoose connected successfully'));

const shoutoutSchema = mongoose.Schema({
  text: { type: String, required: true, unique: true }
});

const Shoutout = mongoose.model('Shoutout', shoutoutSchema);

const addShoutout = shoutout => {
  let thanks = new Shoutout(shoutout);
  return thanks.save();
}

const getAll = () => {
  return Shoutout.find({});
}

module.exports.addShoutout = addShoutout;
module.exports.getAll = getAll;


// let thanks = addShoutout({text: 'LADIES AND GENTLEMEN, WELCOME TO YOUR WEEKLY RETROSPECTIVE!!!!'})
// thanks.then(res => console.log('added to database')).catch(err => console.log('error adding to db'));

// let shoutouts = getAll();
// shoutouts.then(res => console.log('fetched all shoutouts: ', res)).catch(err => console.log('error fetching from db'));