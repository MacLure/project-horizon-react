import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/text_orange.svg";

class StudentNavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="menuBar">
        <img className="icon" src={Logo} alt="Horizon" />

        <ul className="navList">
          <div className="navbarUserName">
            {this.props.student
              ? `${this.props.student.first_name} ${
                  this.props.student.last_name
                }`
              : null}
          </div>
          <NavLink to="/login" activeClassName="active">
            <li className="navItem">Log out</li>
          </NavLink>
        </ul>
      </nav>
    );
  }
}

export default StudentNavBar;
