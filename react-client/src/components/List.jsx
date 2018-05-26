import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({ shoutouts, message, updateMessage }) => (
  <div>
    There are { shoutouts.length } shoutouts.
    { shoutouts.map(shoutout => <ListItem shoutout={shoutout} key={shoutout._id} updateMessage={updateMessage} />)}
    <h1>{message}</h1>
  </div>
)

export default List;