import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #2A2C33;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 35vw;
  height: 25vh;
  border-radius: 2px;
  margin-left: 240px;
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

const Select = styled.select`
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

class NewCohortForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    name: '',
    course_type: '',
    start_date: '',
    end_date: '',
   }

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

   handleSubmit(event) {
    event.preventDefault();
      // fetch('http://localhost:3000/api/admin/cohorts', {
      let data = this.state
      console.log(data);
        fetch(`https://project-horizon-rails.herokuapp.com/api/admin/cohorts?cohort=${JSON.stringify(data)}`, {
        method: 'post',
        mode: "cors"
      })    .then(response => {console.log(this.state)})

  }   handleSubmit(event) {
    event.preventDefault();
      // fetch('http://localhost:3000/api/admin/cohorts', {
      let data = this.state
      console.log(data);
        fetch(`https://project-horizon-rails.herokuapp.com/api/admin/cohorts?cohort=${JSON.stringify(data)}`, {
        method: 'post',
        mode: "cors"
      })    .then(response => {console.log(this.state)})

  }
  
  render() {
    return (
      <React.Fragment>
      <Container>
      <Form onSubmit={this.handleSubmit}>
        <Title>New Cohort</Title>
        <Label htmlFor="name">Name</Label>
 
        <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} ></Input>
 
        <Label htmlFor="course_type">Course Type</Label>
 
        <Select name="course_type" value={this.state.course_type} onChange={this.handleChange} >
          <option value="wdi">Web Development </option>
          <option value="uxdi">User Expierence</option>
          <option value="dsi">Data Science</option>
        </Select>
 
        <Label htmlFor="start_date">Start Date</Label>
        <Input type="date" name="start_date" value={this.state.start_date} onChange={this.handleChange} ></Input>
 
        <Label htmlFor="end_date">End Date</Label>
        <Input type="date" name="end_date" value={this.state.end_date} onChange={this.handleChange} ></Input>
 
        <br/><Button type="submit">Submit</Button>
 
      </Form>
      </Container>
    </React.Fragment>
   );
  }
}

export default NewCohortForm;
