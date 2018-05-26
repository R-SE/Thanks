import React from 'react';

/*const ListItem = (props) => {
  let bubbleStyle = {
    top: `${(Math.random() * (document.documentElement.clientHeight -100))+50}px`,
    left: `${(Math.random() * (document.documentElement.clientWidth - 100))+50}px`,
    color: 'blue',
    // border: '5px solid pink'
  };
  return (
  <div className="bubble" style={bubbleStyle} onMouseOver={e => props.updateMessage(e.target.innerHTML)}>
    { props.shoutout.text }
  </div>
)
}*/

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState){
  //  return !equals(nextProps, this.props);
  return false;
  }
  render() {
      let bubbleStyle = {
    top: `${(Math.random() * (document.documentElement.clientHeight -100))+50}px`,
    left: `${(Math.random() * (document.documentElement.clientWidth - 100))+50}px`,
    color: 'blue',
    cursor: 'pointer'
    // border: '5px solid pink'
  };
  return (
  <div className="bubble" style={bubbleStyle} onMouseOver={e => this.props.updateMessage(e.target.innerHTML)}>
    { this.props.shoutout.text }
  </div>
)
  }
}


export default ListItem;