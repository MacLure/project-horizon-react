import React, { Component } from 'react';

class NavBar extends Component {
  state = {  }
  render() {
    return (
      <div className="nav">


          <ul>
      
            <li>Dashboard</li>
            <li>Articles</li>
            <li>Job Board</li>
            <li>Events</li>
            <li>Settings</li>
          </ul>
    </div>
     );
  }
}

export default NavBar;
