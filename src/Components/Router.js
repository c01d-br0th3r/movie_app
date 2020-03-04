import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import MainPage from "Routes/MainPage";
import Input from "Routes/Input";
import Header from "./Header";

export default () => (
  <Router>
    <Header />
    <Route exact path="/main" component={MainPage} />
    <Route exact path="/input" component={Input} />
  </Router>
);
