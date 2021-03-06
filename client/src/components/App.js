import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import SurveyClicked from "./surveys/SurveyClicked";
import SurveyNew from "./surveys/SurveyNew";
//const Landing = () => <h2>Landing</h2>;

const App = ({ fetchUser }) => {
  useEffect(() => fetchUser());

  return (
    <div>
      <BrowserRouter>
        <div className="container app-wrap">
          <Header />
          <Footer />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
          <Route path="/surveys/thankyou" component={SurveyClicked} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default connect(null, actions)(App);
