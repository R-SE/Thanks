const mongoose = require('mongoose');
const { MLAB } = require('../config.js');
mongoose.connect(MLAB);

const db = mongoose.connection;
db.on('error', (err) => console.log('mongoose connection error', err));
db.once('open', () => console.log('mongoose connected successfully'));

const shoutoutSchema = mongoose.Schema({
  text: { type: String, required: true, unique: true },
  name: { type: String },
  timestamp: { type: Date },
  likes: { type: Number }
});

const Shoutout = mongoose.model('Shoutout', shoutoutSchema);

const addShoutout = shoutout => {
  let thanks = new Shoutout(shoutout);
  return thanks.save();
}

const getAll = () => {
  return Shoutout.find({});
}

const like = _id => Shoutout.findOneAndUpdate({_id}, {$inc : {likes : 1}}, {new: true}).exec();

module.exports.addShoutout = addShoutout;
module.exports.getAll = getAll;
module.exports.like = like;


// let thanks = addShoutout({text: 'LADIES AND GENTLEMEN, WELCOME TO YOUR WEEKLY RETROSPECTIVE!!!!'})
// thanks.then(res => console.log('added to database')).catch(err => console.log('error adding to db'));

// let shoutouts = getAll();
// shoutouts.then(res => console.log('fetched all shoutouts: ', res)).catch(err => console.log('error fetching from db'));

// like('5b0977f8bf946a278f3ac621').then(data => console.log('liked, ', data)).catch(err => console.log(err));