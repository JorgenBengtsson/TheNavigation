import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        {React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, { onClick: this.props.onClick });
        })}
      </div>
    );
  }
}
