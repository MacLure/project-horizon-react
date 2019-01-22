import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Footer from './Footer';

class Signup extends Component {
  state = {  }
  render() {
    return (
      <div>
        <div className="container_large">

          <form method="post" className="container_large">
            <h2>Create an Account</h2>

            <label htmlfor="first_name">First Name</label>
            <input type="text" name="first_name"></input>

            <label htmlfor="last_name">Last Name</label>
            <input type="text" name="last_name"></input>

            <label htmlfor="email">Email</label>
            <input type="text" name="email"></input>

            <label htmlfor="phone">Phone Number</label>
            <input type="text" name="phone"></input>

            <label htmlfor="title">Title</label>
            <input type="text" name="title"></input>

            <label htmlfor="password">Password</label>
            <input type="password" name="password"></input>

            <label htmlfor="confirm_password">Confrim Password</label>
            <input type="password" name="confirm_password"></input>

            <br/><button type="submit" class="submit">Submit</button><br/>
            <p>Already have an account? Log back in <Link to="/login">here</Link></p>
          </form>
        </div>

        <Footer/>
      </div>
      );
  }
}

export default Signup;
