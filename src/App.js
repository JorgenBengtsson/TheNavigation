import React, { Component } from "react";

import "./App.css";
import Body from "./components/Body/body";
import Header from "./components/Header/header";
import MenuLink from "./components/MenuLink/menuLink";
import AboutPage from "./components/Pages/AboutPage/aboutPage";
import MainPage from "./components/Pages/MainPage/mainPage";
import ProductPage from "./components/Pages/ProductPage/productPage";

export default class App extends Component {
  constructor() {
    super();
    this.state = { menuItemSelected: "" };
  }
  render() {
    return (
      <>
        <Header
          onClick={(menuName) => this.setState({ menuItemSelected: menuName })}
        >
          <MenuLink name="Main" />
          <MenuLink name="Products" />
          <MenuLink name="About" />
        </Header>
        <Body pageToShow={this.state.menuItemSelected}>
          <MainPage name="Main" />
          <ProductPage name="Products" />
          <AboutPage name="About" />
        </Body>
      </>
    );
  }
}
