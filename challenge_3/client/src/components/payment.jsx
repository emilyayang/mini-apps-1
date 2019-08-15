import React, { Component } from 'react';
import App from './app.jsx'

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false,
      cc: "",
      exp: "",
      cvv: "",
      zipcc: ""
    }
    this.clickButton = this.clickButton.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  clickButton() {
    this.setState({
      buttonClicked: !this.state.buttonClicked
    })
    // this.postLogin()
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name
    this.setState({
      [name]: value
    });
  }


  render() {
    return (
      <div>
        {this.state.buttonClicked ? <App /> :
          <form>
            Credit Card Number:
  <input type="text" name="cc" required onChange={this.handleInputChange}></input>
            <br></br>
            Expiration:
  <input type="text" name="exp" required onChange={this.handleInputChange} ></input>
            <br></br>

            CVV:
  <input type="password" name="cvv" required onChange={this.handleInputChange}></input>
            <br></br>
            Zip Code:
  <input type="text" name="zipcc" required onChange={this.handleInputChange}></input>
            <br></br>

            <input type="button" value="Purchase" onClick={this.clickButton} ></input>

          </form>}
      </div>
    )
  }
}

export default Payment;
