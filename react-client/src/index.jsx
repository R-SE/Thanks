import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

// import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#e5ffff',
      main: '#b2ebf2',
      dark: '#81b9bf',
      contrastText: '#fff',
    },
    secondary: {
      light: '#56c8d8',
      main: '#0097a7',
      dark: '#006978',
      contrastText: '#000',
    },
  },
});

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
    return (<MuiThemeProvider theme={theme}>
      <h1>Shoutouts</h1>
      <List shoutouts={this.state.shoutouts}/>
      <Shouter sendShout={this.sendShout} />
    </MuiThemeProvider>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));