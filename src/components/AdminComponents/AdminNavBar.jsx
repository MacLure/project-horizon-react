import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/text_orange.svg";
import AdminStyles from "./../../Admin.css";

class AdminNavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <img className="icon" src={Logo} alt="Horizon" />
          <ul className="navList">
            <li>
              <div className="adminNavbarDetails">
                {this.props.admin
                  ? `${this.props.admin.first_name} ${
                      this.props.admin.last_name
                    }, ${this.props.admin.title}`
                  : null}
              </div>
            </li>
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
