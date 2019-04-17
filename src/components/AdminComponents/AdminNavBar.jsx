import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/text_orange.svg";
import AdminStyles from "./../../Admin.css";

class AdminNavBar extends Component {
  state = {
    admin: this.props.admin
  };
  render() {
    return (
      <React.Fragment>
        <nav>
          <img className="icon" src={Logo} alt="Horizon" />
          <ul className="navList">
            <li>{this.state.admin ? this.state.admin.first_ame : null}</li>
            <NavLink to="/login" activeClassName="active">
              <li className="navItem">Log out</li>
            </NavLink>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default AdminNavBar;
