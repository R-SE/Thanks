import React from 'react';

const ListItem = (props) => {
  return (
  <div className="bubble">
    { props.shoutout.text }
  </div>
)
}


export default ListItem;