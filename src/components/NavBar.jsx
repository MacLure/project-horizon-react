import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";


const NavList = styled.ul`
  padding: 0px;
  margin: 0px;
  border-bottom:1px solid #1c1f21;
  background-color: #363A42;
`

const NavItem = styled.li`
  padding: 20px 0px 20px 20px;
  font-size: 15px;
  list-style-type: none;
  color: white;
  border-bottom: 1px solid #272a2c;
  border-top: 1px solid #1c1f21;
  overflow: auto;
  cursor: pointer;

  :hover {
    background-color: #F6744E;
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
          <NavList>
            <NavItem>Logo</NavItem>
            <Link to='./student'><NavItem>Student</NavItem></Link>
            <Link to="./admin"><NavItem>Admin</NavItem></Link>
            <Link to="./articles"><NavItem>Articles</NavItem></Link>
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
