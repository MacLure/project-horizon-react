import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Footer from './Footer';
import styled from 'styled-components';


const Container = styled.div`
  background-color: #232F41;
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

  const Text = styled.p`
    padding-bottom: 20px;
    background-color: inherit;
  `

  const Links = styled.a`
    background-color: inherit;
    color: #DD3D0F;
    opacity: 1;
    transition: opacity 0.5s;

    :hover {
      opacity: 0.5;
      transition: opacity 0.5s;
    }
  `






class Signup extends Component {
  state = {  }
  render() {
    return (
      <React.Fragment>
        <Container>
        <Title>Create an Account</Title>
        <Form method="post">
          <Label htmlfor="first_name">First Name</Label>
          <Input type="text" name="first_name"></Input>

          <Label htmlfor="last_name">Last Name</Label>
          <Input type="text" name="last_name"></Input>

          <Label htmlfor="email">Email</Label>
          <Input type="text" name="email"></Input>

          <Label htmlfor="phone">Phone Number</Label>
          <Input type="text" name="phone"></Input>

          <Label htmlfor="title">Title</Label>
          <Input type="text" name="title"></Input>

          <Label htmlfor="password">Password</Label>
          <Input type="password" name="password"></Input>

          <Label htmlfor="confirm_password">Confrim Password</Label>
          <Input type="password" name="confirm_password"></Input>

          <br/><Button type="submit">Submit</Button><br/>

          <Text>Already have an account?<br/> Log back in <Link to="/login"><Links>here</Links></Link></Text>
          </Form>

          </Container>
        <Footer/>

      </React.Fragment>
      );
  }
}

export default Signup;
