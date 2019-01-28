import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';

const Icon = styled.img`
  width: 120px;
  margin: 0 auto;
  background-color: inherit;
`

const NavList = styled.ul`
  padding: 0px;
  margin: 0px;
  background-color: #363A42;
  border-top: 1px solid #1c1f21;
  border-bottom: 1px solid #1c1f21;
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
  }
  `

const MenuBar = styled.nav`
  width: 140px;
  height: 100%;
  text-align: left;
  position: fixed;
  background-color: #363A42;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

class NavBar extends Component {
  state = {  }
  render() {
    return (
      <React.Fragment>
        <MenuBar>
          <Icon src={Logo} />
          <NavList>
            <Link to='./student'><NavItem>Student</NavItem></Link>

          <NavLink to="./admin" activeClassName="active"> <NavItem>Admin</NavItem></NavLink>

            <Link to="./articles"><NavItem >Articles</NavItem></Link>
            <Link to="./jobs"><NavItem>Job Board</NavItem></Link>
            <Link to="./Events"><NavItem>Events</NavItem></Link>
            <Link to="./Settings"><NavItem>Settings</NavItem></Link>
          </NavList>
        </MenuBar>
      </React.Fragment>
     );
  }
}

export default NavBar;
