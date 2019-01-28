import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Footer from './Footer';
import { connect } from 'react-redux'
import  {onLogin} from './../service'

const Container = styled.div`
  background-color: #38383f;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 30vw;
  border-radius: 2px;
`

const Title = styled.h2 `
  padding-top: 20px;
  background-color: inherit;
  text-align: center;
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
  padding: 5px 10px;
  background-color: #DD3D0F;
  border: none;
  opacity: 1;
  transition: opacity 0.5s;
  border-radius: 2px;
  font-size: 1.1em;
  text-align: center;

  :hover {
    opacity: 0.5;
    transition: opacity 0.45;
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

  onSubmit = () => {
    if (this.state.email !== '' && this.state.password !== '') {
      onLogin(this.state.email, this.state.password)
      .then(e => e.json())
      .then(e => {console.log(e)
      //this.props.onTokenReceive(e.token)
    })
      // link token to redux token, then redirect to the page we want the user to be taken to(props.history.push(dashbard.route)).
    }
  }


  onStudent = () => {
    this.setState({user:'student'})
  }

  onAdmin = () => {
    this.setState({user:'admin'})
  }

  onSubmit = () => {
    if (this.state.email != '' && this.state.password != '') {
      onLogin(this.state.email, this.state.password)
      .then(e => e.json())
      .then(e => {console.log(e)
      this.props.onTokenReceive(e.token)
      this.props.history.push('/admin')
    })
    }
  }

 render() {

   return (
     <React.Fragment>
       <Container>
        <Title>Welcome Back</Title>
        <p style={{textAlign: 'center'}}>I am a:</p>
        <div style={{textAlign: 'center'}}>
          <button onClick={this.onStudent}>Student</button>
          <button onClick={this.onAdmin}>Administrator</button>
        </div>
        <h2>{this.state.user ? `${this.state.user} login` : ''}</h2>
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
           <Button type="submit" onClick={e=>{e.preventDefault(); this.onSubmit()}}>Submit</Button>
         </Form>
       </Container>

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
