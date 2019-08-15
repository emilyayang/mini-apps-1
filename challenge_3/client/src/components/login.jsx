import React, { Component } from 'react';
import axios from 'axios';
import Shipping from './shipping.jsx';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false,
      name: "",
      email: "",
      password: ""
    }
    this.clickButton = this.clickButton.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  clickButton() {
    this.setState({
      buttonClicked: !this.state.buttonClicked
    }, () => this.postLogin())

  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name
    this.setState({
      [name]: value
    });
  }

  postLogin() {
    axios.post('/api/login', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.buttonClicked ? <Shipping /> :
          <form >
            Name:
  <input type="text" name="name" required onChange={this.handleInputChange}></input>
            <br></br>
            Email:
  <input type="text" name="email" required onChange={this.handleInputChange}></input>
            <br></br>

            Password:
  <input type="text" name="password" required onChange={this.handleInputChange}></input>
            <br></br>
            <input type="button" value="Next" onClick={this.clickButton} ></input>
          </form>}
      </div>
    )
  }
}

export default Login;