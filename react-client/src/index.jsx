import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import axios from 'axios';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      shoutouts: []
    }
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

  render() {
    return (<div>
      <h1>Shoutouts</h1>
      <List shoutouts={this.state.shoutouts}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));