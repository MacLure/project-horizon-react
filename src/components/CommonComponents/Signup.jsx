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
          <div className="signupContainer">
          <div className="signupHorizonContainer"><img className="horizon" src={Logo} alt="Horizon" /></div>
          <h2 className="signupTitle">Create an Account</h2>
          <form className="loginForm" method="post">
            <label htmlfor="first_name">First Name</label>
            <input className="loginInput" type="text" name="first_name" placeholder="Sally"></input>

            <label className="loginLabel" htmlfor="last_name">Last Name</label>
            <input className="loginInput" type="text" name="last_name" placeholder="McAdmin"></input>

            <label className="loginLabel" htmlfor="email">Email</label>
            <input className="loginInput" type="text" name="email" placeholder="hello@horizon.com"></input>

            <label className="loginLabel" htmlfor="phone">Phone Number</label>
            <input className="loginInput" type="text" name="phone" placeholder="555-555-5555"></input>

            <label className="loginLabel" htmlfor="accessCode">Access Code</label>
            <input className="loginInput" type="text" name="accessCode" placeholder="1235"></input>

            <label className="loginLabel" htmlfor="title">Title</label>
            <input className="loginInput" type="text" name="title" placeholder="Instructor"></input>

            <label className="loginLabel" htmlfor="password">Password</label>
            <input className="loginInput" type="password" name="password" placeholder="password"></input>

            <label className="loginLabel" htmlfor="confirm_password">Confrim Password</label>
            <input className="loginInput" type="password" name="confirm_password" placeholder="password"></input>

            <br/><button className="loginSubmitButton" type="submit">Submit</button><br/>

            <p>Already have an account?<br/> Log back in <Link className="redirect" to="/login">here</Link></p>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
