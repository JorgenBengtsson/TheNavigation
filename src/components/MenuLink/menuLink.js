import React, { Component } from "react";

export default class MenuLink extends Component {
  render() {
    return (
      <span onClick={() => this.props.onClick(this.props.name)}>
        -{this.props.name}-{" "}
      </span>
    );
  }
}
