import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import  {onAdminLogin} from './../service';
import  {onStudentLogin} from './../service';
import Facebook from '../assets/img/facebook.png';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/horizon_text2.svg';
import horizon_logo from '../assets/img/horizon_logo.svg';


const LogoContainer = styled.div`
  text-align: center;
  background: none;
  margin-top: 150px
  margin-bottom: 50px

`

const Container = styled.div`
  margin: 0 auto;
  width: 400px;
  border-radius: 2px;
  min-width: 250px;
  background: none;
  `

const Horizon = styled.img`
  width: 300px;
  background-color: inherit;
`

const HorizonLogo = styled.img`
  width: 50px;
  background-color: inherit;
`

const ButtonFlex = styled.div`
  display: flex;
  flex-direction: row;
  background-color: inherit;
  justify-content: center;
`

const Hr = styled.div`
  border-bottom: 2px solid #FC6404;
  border-radius: 5px;
`

const Form = styled.form`
  text-align: left;
  margin: 0 50px;
  padding: 20px;
  background-color: inherit;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3;
  border-radius: 2px;
  border: 1px solid white;

`

const Label = styled.label`
  font-size: 0.9em; 
  padding: 15px 0;
  color: white;
  text-align: left;
  background-color: transparent;

`
const Input = styled.input`
  width: 95%;
  font-size: 1.2em; 
  border: 1px solid white;
  margin: 10px 0;
  border-radius: 2px;
  padding: 5px 5px;
  background-color: transparent;

  transition: border 0.5s;
  :focus {
    border: 1px solid #FC6404;
    transition: border 0.5s;
  }
`

const Button = styled.button`
  margin: 20px 20px;
  cursor: pointer;
  transition: color 0.5s;
  border-radius: 2px;
  border: 1px solid white;
  font-size: 1.3em;
  text-align: center;
  background-color: inherit;
  padding: 5px 10px;

  :active {
    color: #FC6404;
  }

  :hover {
<<<<<<< HEAD
    color: #FC6404;
    transition: color 0.5s;
=======
    color:  #FC6404;
    background-color: #fff;
    transition: 0.2;
>>>>>>> 6d6b2d64c7c7714d0f008706b66072c161e36bee
  }`

  const SubmitButton = styled.button`
    margin: 30px auto;
    cursor: pointer;
    padding: 7px 15px;
    color:  #FC6404;
    background-color: #fff;
    transition: 0.3s;
    border-radius: 2px;
    font-size: 1.1em;
    text-align: center;
    border: none;
    opacity: 1;

    :hover {
      transition: 0.2;
      box-shadow: (0 0 5px 5px #000)
  }`

class Login extends Component {
  constructor(props) {
    super(props)
      this.state = {
        user: null,
        email: '',
        password: ''
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
      if (this.state.email !== '' && this.state.password !== '') {
        onAdminLogin(this.state.email, this.state.password)
        .then(e => e.json())
        .then(e => {console.log(e)
          this.props.onTokenReceive(e.jwt)
          this.props.history.push('/admin')
        })
      }
    } else if (this.state.user === 'student') {
      if (this.state.email !== '' && this.state.password !== '') {
        onStudentLogin(this.state.email, this.state.password)
        .then(e => e.json())
        .then(e => {console.log(e)
          this.props.onTokenReceive(e.jwt)
          this.props.history.push('/student')
        })
      }
    }
  }

  displayForm = () => {
    return (this.state.user === null) ?
    null : <Form method="post">
        <Label htmlfor="email">Email</Label><Input type="text" name="email" onChange={e=>{
          this.setState({email: e.target.value})
        }}></Input>
        <Label htmlfor="password">Password</Label><Input type="password" name="password" onChange={e=>{
          this.setState({password: e.target.value})
          }}></Input>
      <div style={{width: '100%', textAlign: 'center', backgroundColor: 'transparent'}}><SubmitButton type="submit" onClick={e=>{e.preventDefault(); this.onSubmit()}}>Log in </SubmitButton></div>
      </Form>
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
      <LogoContainer><Horizon src={Logo}/></LogoContainer>
      <Container>
      <ButtonFlex>
<<<<<<< HEAD
        <Button onClick={this.onStudent} activeClassName="active">Student</Button>
        <Button onClick={this.onAdmin} activeClassName="btn_hover">Admin</Button>
=======
        <Button style={this.highlightStudentButton()} onClick={this.onStudent}>Student</Button>
        <Button style={this.highlightAdminButton()} onClick={this.onAdmin}>Admin</Button>
>>>>>>> 6d6b2d64c7c7714d0f008706b66072c161e36bee
      </ButtonFlex>
      {this.displayForm()}
      </Container>
      <LogoContainer style={{position:"fixed", bottom:"0", left:"50%"}}><HorizonLogo src={horizon_logo}></HorizonLogo></LogoContainer>
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
