import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Login extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <p>Login</p>
        <Link to="/student">Student Dashboard</Link><br />
        <Link to="/admin">Admin Dashboard</Link><br />
        <Link to="/signup">Sign up</Link><br />

      </div>
      );
  }
}
 
export default Login;