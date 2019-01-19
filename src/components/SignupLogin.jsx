import React, { Component } from 'react';
import {Link} from "react-router-dom";

class SignupLogin extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <p>Signup / Login</p>
        <Link to="/student">Student Dashboard</Link><br />
        <Link to="/admin">Admin Dashboard</Link>

      </div>
      );
  }
}
 
export default SignupLogin;