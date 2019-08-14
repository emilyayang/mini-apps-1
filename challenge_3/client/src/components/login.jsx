import React from 'react';


const Login = (props) => (
  <form >
    Name:
  <input type="text" name="name" ></input>
    <br></br>
    Email:
  <input type="text" name="email" ></input>
    <br></br>

    Password:
  <input type="password" name="password" ></input>
    <br></br>
    <input type="submit" value="Next" onClick={props.onLoginSubmit} ></input>
  </form>

)

export default Login;


{/* <form onSubmit={this.handleSubmit}>
<label>
  Name:
  <input type="text" value={this.state.value} onChange={this.handleChange} />
</label>
<input type="submit" value="Submit" />
</form> */}