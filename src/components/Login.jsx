import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Footer from './Footer';

class Login extends Component {
  state = {  }
  render() {
    return (
      <div>
        <div className="container_large">
          <form method="post" className="container_large">
          <h2>Welcome Back</h2>
            <label for="email">Email</label>
            <input type="text" name="email"></input>
            <label for="password">Password</label>
            <input type="password" name="password"></input>

            <br/><button type="submit" class="submit">Submit</button>
          </form>
        </div>

        <Footer/>

      </div>
      );
  }
}

export default Login;
