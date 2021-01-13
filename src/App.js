import React, { Component } from 'react';
import './App.css';
import firebaseConfig from './firebase/config';
import firebase from 'firebase';
import data from './data.json';
import Grid from './components/Grid.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data };
  }

  componentDidMount = () => {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    console.log(this.state);
    return(
      <div>
        <h1> Hello World !</h1>
        <Grid items={this.state.data} />
      </div>
    );
  };
}

export default App;