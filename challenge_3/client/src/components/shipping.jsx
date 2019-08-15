import React, { Component } from 'react';
import Payment from './payment.jsx'

class Shipping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false,
      line1: "",
      line2: "",
      city: "",
      state: "",
      zipship: "",
      phone: ""
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
        {this.state.buttonClicked ? <Payment /> :
          <form >
            Address Line 1:
  <input type="text" name="line1" required onChange={this.handleInputChange}></input>
            <br></br>
            Line 2:
  <input type="text" name="line2" required onChange={this.handleInputChange}></input>
            <br></br>

            City:
  <input type="text" name="city" required onChange={this.handleInputChange}></input>
            <br></br>
            State:
  <input type="text" name="state" required onChange={this.handleInputChange}></input>
            <br></br>
            Zip Code:
  <input type="text" name="zipship" required onChange={this.handleInputChange}></input>
            <br></br>
            Phone Number:
  <input type="text" name="phone" required onChange={this.handleInputChange}></input>
            <br></br>
            <input type="button" value="Next" onClick={this.clickButton} ></input>
          </form>}
      </div>
    )
  }
}

export default Shipping;