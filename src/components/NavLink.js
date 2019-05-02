import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  NavLink
} from "react-router-dom";
class NavStyle extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/" exact activeStyle={{ color: "green " }}>
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/about" exact activeStyle={{ color: "green " }}>
              About
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/user/abhi" exact activeStyle={{ color: "green" }}>
              User
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
export default NavStyle;
