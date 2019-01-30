import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import  {onAdminLogin} from './../service'
import  {onStudentLogin} from './../service'


const Container = styled.div`
  background-color: #38383f;
  margin: 0 auto;
  width: 40vw;
  border-radius: 2px;
  min-width: 250px;
  margin-top: 200px;
`

const Title = styled.h2 `
  padding-top: 20px;
  background-color: inherit;
  text-align: center;
  padding-botom: 40px;
  font-size: 50px;
`

const Text = styled.p`
  background-color: inherit;
  text-align: center;
  padding-bottom: 10px;
  font-size: 20px;
`
const ButtonFlex = styled.div`
  display: flex;
  flex-direction: row;
  background-color: inherit;
  text-align: center;
`

const Hr = styled.div`
  border-bottom: 2px solid #DD3D0F;
  border-radius: 5px;
`

const Form = styled.form`
  text-align: left;
  margin: 0 auto;
  padding-left: 80px;
  background-color: inherit;
`

const Label = styled.label`
  display: block;
  padding: 15px 0;
  background-color: inherit;
  color: white;
  text-align: left;
  padding-left: 0;
`
const Input = styled.input`
  border: 1px solid black;
  border-radius: 2px;
  padding: 5px 5px;
  transition: border 0.5s;

  :focus {
    border: 1px solid #DD3D0F;
    transition: border 0.5s;
  }
`

const Button = styled.button`
  margin: 20px auto;
  cursor: pointer;
  padding: 7px 15px;
  background-color: rgba(56,56,63, 1);
  border: 1px solid #DD3D0F;
  color: rgba(255,255,255, 1);
  transition: 0.3s;
  border-radius: 2px;
  font-size: 1.1em;
  text-align: center;
  background-color: inherit;

  :hover {
    color: rgba(255,255,255, 0.5);
    background-color: rgba(56,56,63, 0.5);
    transition: 0.3;
  }`

  const SubmitButton = styled.button`
    margin: 20px auto;
    cursor: pointer;
    padding: 7px 15px;
    background-color: rgba(56,56,63, 1);
    border: 1px solid #DD3D0F;
    color: rgba(255,255,255, 1);
    transition: 0.3s;
    border-radius: 2px;
    font-size: 1.1em;
    text-align: center;
    background-color: inherit;

    :hover {
      background-color: rgba(221,61,15);
      transition: 0.3;
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

 render() {

   return (
     <div className="landing">
       <Container>
        <Title>Welcome Back</Title>
        <Text>I am a:</Text>
        <ButtonFlex>
          <Button onClick={this.onStudent}>Student</Button>
          <Button onClick={this.onAdmin}>Administrator</Button>
        </ButtonFlex>
          <Hr></Hr>
        <h3>{this.state.user ? `${this.state.user} login` : ''}</h3>
        <Form method="post">
           <Label htmlfor="email">Email</Label>
           <Input type="text" name="email" onChange={e=>{
             this.setState({email: e.target.value})
           }}></Input>
           <Label htmlfor="password">Password</Label>
           <Input type="password" name="password" onChange={e=>{
            this.setState({password: e.target.value})
          }}></Input>
           <br/>
           <SubmitButton type="submit" onClick={e=>{e.preventDefault(); this.onSubmit()}}>Submit</SubmitButton>
         </Form>
       </Container>
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