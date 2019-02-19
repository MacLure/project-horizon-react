import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {onAdminLogin} from '.././../service';
import  {onStudentLogin} from '.././../service';
import './../../Common.css'
import Logo from '../../assets/img/horizon_text2.svg';
import loading from '../../assets/Icons/loading.svg';

class Login extends Component {
  constructor(props) {
    super(props)
      this.state = {
        user: null,
        email: '',
        password: '',
        loader: false,
        error: null,
       }
  }

  componentDidMount(){
    let body = document.getElementsByTagName('body')[0];
    body.style.paddingBottom = 0;
    console.log(body)
  }

  onStudent = () => {
    this.setState({user:'student'})
  }

  onAdmin = () => {
    this.setState({user:'admin'})
  }

  onSubmit = () => {
    if (this.state.user === 'admin') {
      if (!this.state.email || !this.state.password) {
        this.setState({error: "email or password missing"})
      }
      if (this.state.email !== '' && this.state.password !== '') {
        this.setState({loader: true})
        this.setState({error: null})
        onAdminLogin(this.state.email, this.state.password)
        .then(e => e.json())
        .then(e => {console.log(e)
          this.props.onTokenReceive(e.jwt)
          this.props.history.push('/admin')
        })
        .catch(e => {console.log('ERR: ', e)
        this.setState({loader: false})
        this.setState({error: "email or password incorrect"})
      })
      }
    } else if (this.state.user === 'student') {
      if (!this.state.email || !this.state.password) {
        this.setState({error: "email or password missing"})
      }
      if (this.state.email !== '' && this.state.password !== '') {
        this.setState({loader: true})
        this.setState({error: null})
        onStudentLogin(this.state.email, this.state.password)
        .then(e => e.json())
        .then(e => {console.log(e)
          this.props.onTokenReceive(e.jwt)
          this.props.history.push('/student')
        })
        .catch(e => {console.log('ERR: ', e)
        this.setState({loader: false})
        this.setState({error: "email or password incorrect"})
      })
      }
    }
  }

  displayForm = () => {
    return (this.state.user === null) ?
    null : <form className="loginForm" method="post">
        <label className="loginLabel" htmlfor="email">Email</label><input className="loginInput" placeholder="hello@horizon.com" type="text" name="email" onChange={e=>{
          this.setState({email: e.target.value})
        }}></input>
        <label className="loginLabel" htmlfor="password">Password</label><input className="loginInput" placeholder="password" type="password" name="password" onChange={e=>{
          this.setState({password: e.target.value})
        }}></input>
      <div style={{width: '100%', textAlign: 'center', backgroundColor: 'transparent'}}><button className="loginSubmitButton" type="submit" onClick={e=>{e.preventDefault(); this.onSubmit()}}>Log in </button></div>
      <div className="notice">
      {this.state.loader ? <img className="loader" src={loading} /> : null}
      {this.state.error ? this.state.error : null}
      </div>
      </form>
  }

  highlightStudentButton = () => {
    return (this.state.user === 'student') ? {backgroundColor: '#fff', color: '#FC6404'} : {}
  }

  highlightAdminButton = () => {
    return (this.state.user === 'admin') ? {backgroundColor: '#fff', color: '#FC6404'} : {}
  }

 render() {

   return (
    <div className="landing">
      <div className="horizonContainer"><img className="horizon" src={Logo}/></div>
      <div className="loginContainer">
      <div className="buttonFlex">
        <button className="selectButton" style={this.highlightStudentButton()} onClick={this.onStudent}>Student</button>
        <button className="selectButton" style={this.highlightAdminButton()} onClick={this.onAdmin}>Admin</button>
      </div>
      {this.displayForm()}
      </div>
    </div>
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
  mapDispatchtoProps)(Login)
