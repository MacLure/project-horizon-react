import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Login extends Component {
  state = {  }
  render() {
    return (
      <div>
        <div class="container_large">
          <h2>Welcome Back</h2>
          <form method="post">
            <label for="email">Email</label>
            <input type="text" name="email"></input>
            <label for="password">Password</label>
            <input type="password" name="password"></input>

            <br/><button type="submit" class="submit">Submit</button>
          </form>
        </div>







        <Link to="/student">Student Dashboard</Link><br />
        <Link to="/admin">Admin Dashboard</Link><br />
        <Link to="/signup">Sign up</Link><br />

      </div>
      );
  }
}

export default Login;
