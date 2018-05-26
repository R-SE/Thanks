import React from 'react';

const ListItem = (props) => {
  let bubbleStyle = {
    top: `${(Math.random() * (document.documentElement.clientHeight -100))+50}px`,
    left: `${(Math.random() * (document.documentElement.clientWidth - 100))+50}px`,
    color: 'blue',
    // border: '5px solid pink'
  };
  return (
  <div className="bubble" style={bubbleStyle}>
    { props.shoutout.text }
  </div>
)
}


export default ListItem;

// Math.random() * (document.documentElement.clientHeight - 200)