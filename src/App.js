import React, { Component } from "react";

import "./App.css";
import Body from "./components/Body/body";
import Header from "./components/Header/header";
import MenuLink from "./components/MenuLink/menuLink";
import AboutPage from "./components/Pages/AboutPage/aboutPage";
import MainPage from "./components/Pages/MainPage/mainPage";
import ProductPage from "./components/Pages/ProductPage/productPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header>
          <MenuLink link="/" name="Main" />
          <MenuLink link="/products" name="Products" />
          <MenuLink link="/about" name="About" />
        </Header>
        <Body />
      </Router>
    );
  }
}
