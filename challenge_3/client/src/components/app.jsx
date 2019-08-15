import React, { Component } from 'react';
import Login from './login.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false,
    }
    this.clickButton = this.clickButton.bind(this)
  }

  clickButton() {
    this.setState({
      buttonClicked: !this.state.buttonClicked
    })
  }

  render() {
    return (
      <div>
        {this.state.buttonClicked ? <Login /> : <button onClick={this.clickButton}>Checkout</button>}
      </div>
    )
  }
}

export default App;