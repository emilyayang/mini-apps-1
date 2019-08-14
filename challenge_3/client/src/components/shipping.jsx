import React from 'react';


const Shipping = (props) => (
  <form >
    Address Line 1:
  <input type="text" name="line1" ></input>
    <br></br>
    Line 2:
  <input type="text" name="line2" ></input>
    <br></br>

    City:
  <input type="text" name="city" ></input>
    <br></br>
    State:
  <input type="text" name="state" ></input>
    <br></br>
    Zip Code:
  <input type="text" name="zipship" ></input>
    <br></br>
    Phone Number:
  <input type="text" name="phone" ></input>
    <br></br>
    <input type="submit" value="Next" onClick={props.onShippingSubmit} ></input>
  </form>
)

export default Shipping;