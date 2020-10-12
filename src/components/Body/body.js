import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./body.css";

import AboutPage from "../Pages/AboutPage/aboutPage";
import MainPage from "../Pages/MainPage/mainPage";
import ProductPage from "../Pages/ProductPage/productPage";

export default class Body extends Component {
  render() {
    return (
      <div className="body">
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/products">
            <ProductPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    );
  }
}
