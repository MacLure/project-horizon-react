import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Signup extends Component {
  state = {  }
  render() {
    return (
      <div>
        <div className="container_large">

          <form method="post" className="container_large">
            <h2>Create an Account</h2>

            <label for="first_name">First Name</label>
            <input type="text" name="first_name"></input>

            <label for="last_name">Last Name</label>
            <input type="text" name="last_name"></input>

            <label for="email">Email</label>
            <input type="text" name="email"></input>

            <label for="phone">Phone Number</label>
            <input type="text" name="phone"></input>

            <label for="title">Title</label>
            <input type="text" name="title"></input>

            <label for="password">Password</label>
            <input type="password" name="password"></input>

            <label for="confirm_password">Confrim Password</label>
            <input type="password" name="confirm_password"></input>

            <br/><button type="submit" class="submit">Submit</button><br/>
            <p>Already have an account? Log back in <Link to="/login">here</Link></p>
          </form>
        </div>




        <Link to="/student">Student Dashboard</Link><br />
        <Link to="/admin">Admin Dashboard</Link><br />


      </div>
      );
  }
}

export default Signup;
