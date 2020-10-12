import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./menuLink.css";

export default class MenuLink extends Component {
  render() {
    return (
      <div className="menuLink">
        <Link to={this.props.link}>{this.props.name}</Link>
      </div>
    );
  }
}
