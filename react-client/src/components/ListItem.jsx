import axios from 'axios';
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
    let defaultLeft = (Math.random() * (document.documentElement.clientHeight -100)) + 50;
    let defaultRight = (Math.random() * (document.documentElement.clientWidth - 100)) + 50;
    let likes = this.props.shoutout.likes;
    let size = likes * 5 + 50;
    this.state = {
      left: defaultLeft,
      right: defaultRight,
      angle: 0,
      height: size,
      width: size,
      likes: likes
    };
    // console.log('rendering listitem with likes: ', this.state.likes);
    this.float = this.float.bind(this);
    // this.updateLikes = this.updateLikes.bind(this);
    // this.forceUpdate = this.forceUpdate.bind(this);
    // console.log('setting position in statez')
  }
  // shouldComponentUpdate(nextProps, nextState) {
  // //  return !equals(nextProps, this.props);
  // // console.log(this.state.left, nextProps, nextState)
  // // return this.state.left !== nextState.left
  //   // return false;
  //   return true;
  // }
  componentDidMount() {
    setTimeout(this.float, 50);
    setInterval(this.float, 3000);
  }
  // componentWillReceiveProps(nextProps) {
  //   this.setState({ data: nextProps.data });  
  // }
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
  // updateLikes() {
  //   // console.log(this.props.shoutout._id)
  //   console.log('liking bubble');
  //   let id = this.props.shoutout._id;
  //   axios.post('/likeshoutout', {id})
  //   .then(res => {
  //     console.log('updated likes successfully');
  //     console.log('before fetching shoutouts', this.state.likes);
  //     // let newLikes = this.state.likes + 1;
  //     // this.setState({likes: newLikes});
  //     this.props.getShoutouts();
  //     console.log('after fetching shoutouts', this.state.likes);
  //     // setTimeout(this.forceUpdate, 1000);
  //     // this.getShoutouts();
  //   })
  //   .then(() => console.log('then the likes are:', this.state.likes))
  //   .catch(err => console.log(err));
  // }
  render() {
    let bubbleStyle = {
      top: `${this.state.left}px`,
      left: `${this.state.right}px`,
      transform: `rotate(${this.state.angle}deg)`,
      height: `${this.state.height}px`,
      width: `${this.state.width}px`,
    };
  return (
  <div className="bubble" style={bubbleStyle} onMouseOver={e => this.props.updateMessage(e.target.innerHTML)} onClick={() => {this.props.updateLikes(this.props.shoutout._id)}} >
    { this.props.shoutout.text }
  </div>
)
  }
}


export default ListItem;