import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Logo from '../../assets/img/horizon_text2.svg';
import loading from '../../assets/Icons/loading.svg';
import CommonStyles from './../../Common.css'


class Signup extends Component {
  state = {  }
  render() {
    return (
        <div className="landing">
        <h2>Create an Account</h2>
          <div className="signupContainer">
          <form className="loginForm" method="post">
            <label htmlfor="first_name">First Name</label>
            <input className="loginInput" type="text" name="first_name"></input>

            <label className="loginLabel" htmlfor="last_name">Last Name</label>
            <input className="loginInput" type="text" name="last_name"></input>

            <label className="loginLabel" htmlfor="email">Email</label>
            <input className="loginInput" type="text" name="email"></input>

            <label className="loginLabel" htmlfor="phone">Phone Number</label>
            <input className="loginInput" type="text" name="phone"></input>

            <label className="loginLabel" htmlfor="title">Title</label>
            <input className="loginInput" type="text" name="title"></input>

            <label className="loginLabel" htmlfor="password">Password</label>
            <input className="loginInput" type="password" name="password"></input>

            <label className="loginLabel" htmlfor="confirm_password">Confrim Password</label>
            <input className="loginInput" type="password" name="confirm_password"></input>

            <br/><button className="loginSubmitButton" type="submit">Submit</button><br/>

            <p>Already have an account?<br/> Log back in <Link to="/login">here</Link></p>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
