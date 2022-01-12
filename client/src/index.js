import "materialize-css/dist/css/materialize.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

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
