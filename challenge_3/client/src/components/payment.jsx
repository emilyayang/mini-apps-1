import React from 'react';


const Payment = (props) => (
  <form>
    Credit Card Number:
  <input type="text" name="cc#" ></input>
    <br></br>
    Expiration:
  <input type="text" name="exp" ></input>
    <br></br>

    CVV:
  <input type="password" name="cvv" ></input>
    <br></br>
    Zip Code:
  <input type="text" name="zipcc" ></input>
    <br></br>

    <input type="submit" value="Purchase" onClick={props.onPaymentSubmit} ></input>

  </form>
)

export default Payment;
