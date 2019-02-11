import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/text_orange.svg';

const MenuBar = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #363A42;
`

const NavList = styled.ul`
  padding: 0px;
  /* margin: 50% 0px; */
  background-color: #363A42;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 20px;
  float: right;
`

const Icon = styled.img`
  height: 30px;
  padding-left: 20px
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: inherit;
  float: left;
`

const NavItem = styled.li`
  background-color: #363A42;
  font-size: 15px;
  list-style-type: none;
  color: white;
  cursor: pointer;
  padding: 20px;


  opacity: 1;
  transition: opacity 0.5s;

  :hover {
  opacity: 0.5
  transition: opacity 0.5s;
  }`

class AdminNavBar extends Component {
  state = {  }
  render() {
    return (
      <React.Fragment>
        <MenuBar>
          <Icon src={Logo} />
          <NavList>
            <NavLink to="/admin" activeClassName="active"> <NavItem>Dashboard</NavItem></NavLink>

            <NavLink to="/settings" activeClassName="active"><NavItem>Settings</NavItem></NavLink>

            <NavLink to="/login" activeClassName="active"><NavItem>Log out</NavItem></NavLink>
          </NavList>
        </MenuBar>
      </React.Fragment>
     );
  }
}

export default AdminNavBar;
