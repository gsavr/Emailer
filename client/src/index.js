import "materialize-css/dist/css/materialize.css";
import "@coreui/icons/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/custom.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

//Development only
import axios from "axios";
window.axios = axios; //this was used to test axios from console on browser

const store = createStore(
  reducers /* () => [] dummy reducer */,
  {},
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// console.log("Stripe Key is", process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
// console.log("Environment is", process.env.NODE_ENV);
