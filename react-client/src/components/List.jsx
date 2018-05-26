import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({ shoutouts, message, updateMessage, getShoutouts, updateLikes }) => (
  <div>
    {/*There are { shoutouts.length } shoutouts.*/}
    { shoutouts.map(shoutout => <ListItem shoutout={shoutout} key={shoutout._id} updateMessage={updateMessage} getShoutouts={getShoutouts} updateLikes={updateLikes}/>)}
    <h1 id="message" >{message}</h1>
  </div>
)

export default List;