import React from 'react';
import ReactDOM from 'react-dom';

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
    let defaultLeft = (Math.random() * (document.documentElement.clientHeight -100))+50;
    let defaultRight = (Math.random() * (document.documentElement.clientWidth - 100))+50;
    this.state = {
      left: defaultLeft,
      right: defaultRight,
      angle: 0,
      height: 75,
      width: 75,
    };
    this.float = this.float.bind(this);
    // console.log('setting position in statez')
  }
  shouldComponentUpdate(nextProps, nextState) {
  //  return !equals(nextProps, this.props);
  // console.log(this.state.left, nextProps, nextState)
  // return this.state.left !== nextState.left
    // return false;
    return true;
  }
  componentDidMount() {
    setTimeout(this.float, 50);
    setInterval(this.float, 3000);
  }
  float() {
    // console.log('floating bubble');
    let generateNum = (min, max, neg=true) => {
      let num = Math.floor(Math.random() * max) + min;
      if (!neg) return num;
      return num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    }
    let moveLeft = generateNum(1, 10);
    let moveRight = generateNum(1, 10);
    let rotate = generateNum(1, 30, false);
    let newLeft = this.state.left + moveLeft;
    let newRight = this.state.right + moveRight;
    let newAngle = this.state.angle + rotate;
    this.setState({left: newLeft, right: newRight, angle: newAngle}); 
  }
  render() {
    let bubbleStyle = {
      top: `${this.state.left}px`,
      left: `${this.state.right}px`,
      transform: `rotate(${this.state.angle}deg)`,
      height: `${this.state.height}px`,
      width: `${this.state.width}px`,
    };
  return (
  <div className="bubble" style={bubbleStyle} onMouseOver={e => this.props.updateMessage(e.target.innerHTML)}>
    { this.props.shoutout.text }
  </div>
)
  }
}


export default ListItem;