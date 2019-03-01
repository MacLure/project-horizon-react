import React, { Component } from 'react';
import StudentStyles from './../../Student.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/text_orange.svg';


class StudentNavBar extends Component {
  state = {  }
  render() {
    return (
        <nav className="menuBar">
          <img className="icon" src={Logo} />

          <ul className="navList">
            <NavLink to="/student" activeClassName="active"><li className="navItem">Dashboard</li></NavLink>
            <NavLink to="/login" activeClassName="active"><li className="navItem">Log out</li></NavLink>
          </ul>
        </nav>
     );
  }
}

export default StudentNavBar;
