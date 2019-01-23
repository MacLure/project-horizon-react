import React, { Component } from 'react';
import styled from 'styled-components'

const NavItem = styled.li`
  background: blue;
`

class NavBar extends Component {
  state = {  }
  render() {
    return (
      <div className="nav">


          <ul>
      
            <NavItem>Dashboard</NavItem>
            <NavItem>Articles</NavItem>
            <NavItem>Job Board</NavItem>
            <NavItem>Events</NavItem>
            <NavItem>Settings</NavItem>
          </ul>
    </div>
     );
  }
}

export default NavBar;
