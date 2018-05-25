import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({ shoutouts }) => (
  <div>
    There are { shoutouts.length } shoutouts.
    { shoutouts.map(shoutout => <ListItem shoutout={shoutout} key={shoutout._id}/>)}
  </div>
)

export default List;