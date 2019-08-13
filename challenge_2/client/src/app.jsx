import React, { Component } from 'react';

import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postCSV = this.postCSV.bind(this);

  }

  componentDidMount() {
    this.postCSV();
  }

  postCSV(value) {
    Axios.post('/upload_json', {
      value
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleSubmit(event) {
    var value = document.getElementById('input').value;
    event.preventDefault();
    this.postCSV(value);
    document.getElementById('input').value = '';

  }

  render() {
    return (
      <div>
        <h1>CSV</h1>
        <form>
          <input type="text" name="csv" id='input' />
          <input type="submit" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

export default App;
