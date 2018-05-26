import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

// import Button from '@material-ui/core/Button';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#e5ffff',
//       main: '#b2ebf2',
//       dark: '#81b9bf',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#56c8d8',
//       main: '#0097a7',
//       dark: '#006978',
//       contrastText: '#000',
//     },
//   },
// });

import List from './components/List.jsx';
import Shouter from './components/Shouter.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      shoutouts: [],
      message: `LADIES AND GENTLEMEN,                       
      WELCOME TO YOUR WEEKLY RETROSPECTIVE!!!`
    }
    this.sendShout = this.sendShout.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
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

  updateMessage(message) {
    this.setState({message});
  }

  render() {
    return (
    // <MuiThemeProvider theme={theme}>
    <div>
      <List shoutouts={this.state.shoutouts} message={this.state.message} updateMessage={this.updateMessage}/>
      <Shouter sendShout={this.sendShout}/>
      <div id="githublogin"></div>
      </div>
      // {/*</MuiThemeProvider>*/}
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));