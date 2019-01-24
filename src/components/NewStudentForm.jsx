import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #2A2C33;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 35vw;
  border-radius: 2px;
`

const Title = styled.h2 `
  padding-top: 20px;
  background-color: inherit;
  text-align: left;
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

class NewStudentForm extends Component {
 constructor(props) {
   super(props);
   this.state = {
   first_name: '',
   last_name: '',
   phone: '',
   email: '',
   cohort_id: '',
   image_url: ''
  }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

 }

 handleChange(event) {
   this.setState({[event.target.name]: event.target.value});
 }

 handleSubmit(event) {
   event.preventDefault();
   console.log('new student submitted: ' + this.state);
   event.preventDefault();
 }

 render() {
   return (
     <React.Fragment>
      <Container>
       <Form method="post" onSubmit={this.handleSubmit}>
       <Title>New Student</Title>

         <Label htmlFor="first_name">First Name</Label>
         <Input type="text" name="first_name"  value={this.state.first_name} onChange={this.handleChange}></Input>

         <Label htmlFor="last_name">Last Name</Label>
         <Input type="text" name="last_name"  value={this.state.last_name} onChange={this.handleChange}></Input>

         <Label htmlFor="phone">Phone Number</Label>
         <Input type="tel" name="phone" value={this.state.phone} onChange={this.handleChange}></Input>

         <Label htmlFor="email">Email</Label>
         <Input type="text" name="email"  value={this.state.email} onChange={this.handleChange}></Input>

         <Label htmlFor="first_name">First Name</Label>
         <Input type="text" name="first_name"></Input>

         <Label htmlFor="last_name">Last Name</Label>
         <Input type="text" name="last_name"></Input>

         <Label htmlFor="phone">Phone Number</Label>
         <Input type="tel" name="phone"></Input>

         <Label htmlFor="email">Email</Label>
         <Input type="text" name="email"></Input>

         <br/><Button type="submit">Submit</Button>
       </Form>
       </Container>
     </React.Fragment>
    );
 }
}

export default NewStudentForm;
