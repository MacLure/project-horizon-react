import React, { Component } from 'react';
import {Link} from "react-router-dom";

class AdminDashboard extends Component {
  state = {  }
  render() { 

    fetch('https://project-horizon-rails.herokuapp.com/admin')
      .then(e=>e.json())
      .then(e=>console.log(e))

    return (
      <div>
        <p>Admin Dashboard</p>
        <Link to="/student">Student Dashboard</Link><br/>
        <Link to="/signup">Sign up</Link><br/>
        <Link to="/login">Log in</Link><br/>
      </div>
    );
  }
}
 
export default AdminDashboard;