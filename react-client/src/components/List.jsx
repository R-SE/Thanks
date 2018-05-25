import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({ shoutouts }) => (
  <div>
    <h4> List Component </h4>
    There are { shoutouts.length } shoutouts.
    { shoutouts.map(shoutout => <ListItem shoutout={shoutout} key={shoutout._id}/>)}
  </div>
)

export default List;