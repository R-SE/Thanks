import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Shouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			text: '',
			name: 'anonymous',
			timestamp: "2018-05-25T17:55:38Z",
			likes: 0
		}
		this.changeText = this.changeText.bind(this);
		this.checkEnter = this.checkEnter.bind(this);
		this.shout = this.shout.bind(this);
  }
	checkEnter(e) {
		if (e.key === 'Enter') this.shout();
	}
	changeText(e) {
		// console.log('input: ', input);
		// console.log(e.which);
		this.setState({text: e.target.value});
	}
	shout() {
		if (this.state.text === '') return;
		console.log('sending shout!');
		let text = this.state.text, name = this.state.name, timestamp = this.state.timestamp, likes = this.state.likes;
		let message = {text, name, timestamp, likes};
		console.log(message);
		this.props.sendShout(message);
		this.setState({
			text: '',
			name: 'anonymous',
			timestamp: null,
			likes: 0
		});
	}
  render() {
    return (
      <div>
          <h2>Send Thanks</h2>
					<input className="message" value={this.state.text} onChange={this.changeText} onKeyUp={this.checkEnter}/>
      </div>
    )
	}
}

export default Shouter;