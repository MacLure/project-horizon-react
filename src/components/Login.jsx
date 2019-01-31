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
  background-color: #2A2C33;
  margin: 0 auto;
  width: 400px;
  border-radius: 2px;
  min-width: 250px;
  background: none;
  `

const Title = styled.h2 `
  padding-top: 20px;
  background-color: inherit;
  text-align: center;
  font-size: 30px;
`

const Horizon = styled.img`
  width: 300px;
  background-color: inherit;
`

const HorizonLogo = styled.img`
  width: 50px;
  background-color: inherit;
`

const Text = styled.p`
  background-color: inherit;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
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
  background-color: inherit;
  color: white;
  text-align: left;
`
const Input = styled.input`
  width: 95%;
  font-size: 1.2em; 
  border: 1px solid white;
  margin: 10px 0;
  border-radius: 2px;
  padding: 5px 5px;
  transition: border 0.5s;
  background-color: inherit;
  :focus {
    border: 1px solid #FC6404;
    transition: border 0.5s;
  }
`

const Button = styled.button`
  margin: 20px 20px;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 2px;
  border: 1px solid white;
  font-size: 1.3em;
  text-align: center;
  background-color: inherit;
  padding: 5px 10px;

  :hover {
    color:  #FC6404;
    background-color: #fff;
    transition: 0.5;
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
      transition: 0.3;
      opacity: 0.5;
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
      <div style={{width: '100%', textAlign: 'center', backgroundColor: 'inherit'}}><SubmitButton type="submit" onClick={e=>{e.preventDefault(); this.onSubmit()}}>Log in </SubmitButton></div>
      </Form>
  }


 render() {

   return (
    <div className="landing">
      <LogoContainer><Horizon src={Logo}/></LogoContainer>
      <Container>
      <ButtonFlex>
        <Button onClick={this.onStudent}>Student</Button>
        <Button onClick={this.onAdmin}>Admin</Button>
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
