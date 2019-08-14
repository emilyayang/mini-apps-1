import React, { Component } from 'react';
import Login from './login.jsx'
import Shipping from './shipping.jsx'
import Payment from './payment.jsx'
import Home from './home.jsx'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckoutClicked: false,
      isLoggedin: false,
      isShippingIn: false,
      isPaymentIn: false,
      // showing: true
    }
    this.onCheckoutClick = this.onCheckoutClick.bind(this)
    this.onLoginSubmit = this.onLoginSubmit.bind(this)
    this.onShippingSubmit = this.onShippingSubmit.bind(this)
    this.onPaymentSubmit = this.onPaymentSubmit.bind(this)

    this.onLoginPost = this.onLoginPost.bind(this)


  }

  componentDidMount() {

  }

  onCheckoutClick(event) {
    event.preventDefault();
    this.setState({ isCheckoutClicked: true });
    // this.setState({ showing: false })
  }

  onLoginSubmit(event) {
    event.preventDefault();
    this.setState({ onLoginSubmit: true });
    // this.setState({ showing: false })
  }
  onShippingSubmit(event) {
    event.preventDefault();
    this.setState({ onShippingSubmit: true });
    // this.setState({ showing: false })
  }
  onPaymentSubmit(event) {
    event.preventDefault();
    this.setState({ onShippingSubmit: false });
    this.setState({ onLoginSubmit: false });
    this.setState({ isCheckoutClicked: false });


    // this.setState({ showing: false })
  }
  onLoginPost() {

  }

  render() {
    return (
      <div>
        {!this.state.isCheckoutClicked ? <Home onCheckoutClick={this.onCheckoutClick} /> : null}
        {this.state.isCheckoutClicked ? <Login onLoginSubmit={this.onLoginSubmit} /> : null}
        {this.state.isLoggedin ? <Shipping onShippingSubmit={this.onShippingSubmit} /> : null}
        {this.state.isShippingIn ? <Payment onPaymentSubmit={this.onPaymentSubmit} /> : null}
        {/* {this.state.isPaymentIn ? <Home /> : null} */}
      </div>
    )
  }
}

export default App;