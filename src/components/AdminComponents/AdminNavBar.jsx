import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/text_orange.svg';
import AdminStyles from './../../Admin.css';

class AdminNavBar extends Component {
  state = {  }
  render() {
    return (
      <React.Fragment>
        <nav>
          <img className="icon" src={Logo} />
          <ul className="navList">
            <NavLink to="/admin" activeClassName="active"> <li className="navItem">Dashboard</li></NavLink>

            <NavLink to="/settings" activeClassName="active"><li className="navItem">Settings</li></NavLink>
            
            <NavLink to="/login" activeClassName="active"><li className="navItem">Log out</li></NavLink>
          </ul>
        </nav>
      </React.Fragment>
     );
  }
}

export default AdminNavBar;
