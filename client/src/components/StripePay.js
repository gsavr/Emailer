import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

const StripePay = ({ handleToken }) => {
  //debugger;

  return (
    <StripeCheckout
      name="EMailMan"
      description="5 email survey credits"
      amount={500} //$5 in USD
      token={(token) => handleToken(token)} //call action creator
      stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
    >
      <a>Add Credits</a>
      {/* in class he added <button className="btn">Add Credits</button> */}
    </StripeCheckout>
  );
};

export default connect(null, actions)(StripePay);
