import React, { Component } from 'react';
import Footer from './Footer';
import styled from 'styled-components';
import { connect } from 'react-redux'
import  {onLogin} from './../service'
import Logo from '../assets/img/logo.svg';


class Login extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        email: '',
        password: ''
       }
  }

  onSubmit = () => {
    if (this.state.email != '' && this.state.password != '') {
      onLogin(this.state.email, this.state.password)
      .then(e => e.json())
      .then(e => {console.log(e)
      //this.props.onTokenReceive(e.token)
    })
      // link token to redux token, then redirect to the page we want the user to be taken to(props.history.push(dashbard.route)).
    }
  }

 render() {

   return (
     <React.Fragment>
       <div>
        <h1>Welcome to Horizon</h1>
        <div style={{textAlign: 'center'}}><img src={Logo} style={{width: '100px'}} /></div>
        <p style={{textAlign: 'center'}}>I am an: administrator / student</p>
          <div style={{textAlign: 'center'}}>ADMIN LOGIN COMPONENT</div>
          <div style={{textAlign: 'center'}}>ADMIN SIGNUP COMPONENT?</div>
          <div style={{textAlign: 'center'}}>STUDENT LOGIN COMPONENT</div>
       </div>

       <Footer/>

     </React.Fragment>
     );
 }
}

const mapStatetoProps = state => {
  return {
    token: state.token,
    isAuthenticated: state.isAuthenticated,
    isAuthenticating: state.isAuthenticating,
    currentUser: state.currentUser,
    errors: state.errors
  }
}

const mapDispatchtoProps = dispatch => {
  return  {
    onTokenReceive: token => dispatch({ type: "SET_USER_TOKEN", payload: token})
  }
}

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)

(Login)



