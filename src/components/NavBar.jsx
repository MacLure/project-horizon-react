import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';

const MenuBar = styled.nav`
  grid-coulmn-start: 1;
  width: 140px;
  height: 100%;
  text-align: left;
  position: fixed;
  background-color: #363A42;
`

const NavList = styled.ul`
  padding: 0px;
  margin: 50% 0px;
  background-color: #363A42;
  border-top: 1px solid #1c1f21;
  border-bottom: 1px solid #1c1f21;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Icon = styled.img`
  width: 120px;
  margin: 0 auto;
  padding: 10px;
  background-color: inherit;
`

const NavItem = styled.li`
  padding: 20px 0px 20px 20px;
  background-color: #2A2C32;
  font-size: 15px;
  list-style-type: none;
  color: white;
  overflow: auto;
  cursor: pointer;
  border-top: 1px solid #1c1f21;
  border-bottom: 1px solid #272a2c;
  transition: background-color 0.5s;

  :hover {
  background-color: #F6744E;
  transition: background-color 0.5s;
  }`

class NavBar extends Component {
  state = {  }
  render() {
    return (
      <React.Fragment>
        <MenuBar>
          <Icon src={Logo} />
          <NavList>
            <NavLink to='/student'><NavItem>Student</NavItem></NavLink>

          <NavLink to="/admin" activeClassName="active"> <NavItem>Admin</NavItem></NavLink>

            <NavLink to="/articles" activeClassName="active"><NavItem >Articles</NavItem></NavLink>
            <NavLink to="/jobs" activeClassName="active"><NavItem>Job Board</NavItem></NavLink>
            <NavLink to="/contacts" activeClassName="active"><NavItem>Contacts</NavItem></NavLink>
            <NavLink to="/settings" activeClassName="active"><NavItem>Settings</NavItem></NavLink>
          </NavList>
        </MenuBar>
      </React.Fragment>
     );
  }
}

export default NavBar;
