import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Signup extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <p>Signup</p>
        <Link to="/student">Student Dashboard</Link><br />
        <Link to="/admin">Admin Dashboard</Link><br />
        <Link to="/login">Login</Link><br/>

      </div>
      );
  }
}
 
export default Signup;