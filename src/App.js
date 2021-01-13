import React, { Component } from 'react';
import './App.css';
import firebase from './firebase/Firebase';
import Grid from './components/Grid.js'
import Form from './components/Form.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [] };
  }

  updateData = () => {
    firebase.db
    .collection("contacts")
    .get()
    .then((snapshot) => {
      let contacts = [];
      snapshot.forEach((doc) => {
        let contact = Object.assign({ id: doc.id}, doc.data());
        contacts.push(contact);
      })
      this.setState({ contacts })
    })
    .catch((err) => {
      console.error("Une erreur s'est produite : ", err)
    })
  }

  componentDidMount = () => {
    this.updateData();
  }

  render() {
    console.log(this.state);
    return(
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo center">Contacts</a>
            </div>
          </nav>
        </div>

        <Form />

        <Grid items={this.state.contacts} />
      </div>
    );
  };
}

export default App;