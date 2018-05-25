import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './components/List.jsx';
import Shouter from './components/Shouter.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      shoutouts: []
    }
    this.sendShout = this.sendShout.bind(this);
  }

  componentDidMount() {
    this.getShoutouts();
  }

  getShoutouts() {
    console.log('getting shoutouts!');
    axios.get('/shoutouts')
    .then(res => {
      console.log(res.data);
      this.setState({shoutouts: res.data})
    })
    .catch(err => {
      console.log(err);
    });
  }

  sendShout(shoutout) {
    axios.post('/shoutouts', shoutout)
    .then(res => {
      console.log(res);
      this.getShoutouts();
    })
    .catch(err => console.log(err));
  }

  render() {
    return (<div>
      <h1>Shoutouts</h1>
      <List shoutouts={this.state.shoutouts}/>
      <Shouter sendShout={this.sendShout} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));