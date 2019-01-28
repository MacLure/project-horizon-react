import React, { Component } from 'react';
import Footer from './Footer';
import styled from 'styled-components';
import { connect } from 'react-redux'
import  {onLogin} from './../service'
import Logo from '../assets/img/logo.svg';
import horizon_text from '../assets/img/horizon_text.svg';


class Login extends Component {
  constructor(props) {
    super(props)
      this.state = {
        studentOrAdmin: null,
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


  onStudent = () => {
    this.setState({studentOrAdmin:'student'})
  }
  
  onAdmin = () => {
    this.setState({studentOrAdmin:'admin'})
  }

 render() {

  const studentAdminLogin = () => {
    if (this.state.studentOrAdmin === 'student') {
      return (
        <div>
          <h2>Student Login</h2>
          <form method="post">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              onChange={e=>{
                this.setState({email: e.target.value})
              }}
            /> 
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={e=>{
                this.setState({password: e.target.value})
              }} 
            />
            <br/>
            <button type="submit" onClick={e=>{e.preventDefault(); this.onSubmit()}}>Submit</button>
          </form>
        </div>
      )
    } else if (this.state.studentOrAdmin === 'admin') {
      return (
        <div>
          <h2>Admin Login</h2>
          <form method="post">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              onChange={e=>{
                this.setState({email: e.target.value})
              }}
            /> 
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={e=>{
                this.setState({password: e.target.value})
              }} 
            />
            <br/>
            <button type="submit" onClick={e=>{e.preventDefault(); this.onSubmit()}}>Submit</button>
          </form>
        </div>
      )
    }
  }


   return (
     <React.Fragment>
       <div>
        <h1>Welcome to</h1>
        <div style={{textAlign: 'center'}}><img src={horizon_text} style={{width: '100px'}} /></div>

        <p style={{textAlign: 'center'}}>I am a:</p>
        <div style={{textAlign: 'center'}}>
          <button onClick={this.onStudent}>Student</button>
          <button onClick={this.onAdmin}>Administrator</button>
        </div>

          {studentAdminLogin()}
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
