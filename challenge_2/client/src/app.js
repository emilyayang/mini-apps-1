import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
      <h1>CSV</h1>
      <form method="POST" action="/upload_json">
        <input type="text" name="csv" />
        <input type="submit" />
      </form>
      </div>
    )
  }
}

export default App;