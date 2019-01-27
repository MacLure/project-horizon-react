import React, { Component } from 'react';
import styled from 'styled-components';
import Arrow from '../assets/Icons/DoubleDown.png';

const Container = styled.div`
  background-color: #2A2C33;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 40vw;
  border-radius: 2px;
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: auto;
  justify-self: center;
  /* height: 355px; */
`

const Title = styled.h2 `
  padding-top: 20px;
  padding-left: 80px;
  padding-bottom: 15px;
  background-color: inherit;
  text-align: left;
`

const Form = styled.form`
  text-align: left;
  padding-left: 80px;
  background-color: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3;
`

const Name = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  background-color: inherit;
`

const Course = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  background-color: inherit;
`
const StartDate = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;
  background-color: inherit;
`

const EndDate = styled.div`
  grid-column-start: 2;
  grid-row-start: 2;
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
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;       /* remove default arrow */
  background-image: src={Arrow};   /* add custom arrow */

  :focus {
    border: 1px solid #DD3D0F;
    transition: border 0.5s;
  }
`
const Button = styled.button`
  margin: 30px auto;
  margin-left: 0;
  padding-left: 0;
  cursor: pointer;
  padding: 5px 10px;
  background-color: #DD3D0F;
  border: none;
  opacity: 1;
  transition: opacity 0.5s;
  border-radius: 2px;
  font-size: 1.1em;
  text-align: center;
  grid-column-start: 1;
  grid-row-start: 3;

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
        fetch(`https://project-horizon-rails.herokuapp.com/admin/cohorts?cohort=${JSON.stringify(data)}`, {
        method: 'post',
        mode: "cors"
      })    .then(response => {console.log(this.state)})

  }

  render() {
    return (
      <React.Fragment>
      <Container>
      <Title>New Cohort</Title>
      <Form onSubmit={this.handleSubmit}>
        <Name>
          <Label htmlFor="name">Name</Label>
          <Input type="text" placeholder="BB8" name="name" value={this.state.name} onChange={this.handleChange} ></Input>
        </Name>
        <Course>
          <Label htmlFor="course_type">Course Type</Label>
          <Select name="course_type" value={this.state.course_type} onChange={this.handleChange} >
          <option value="wdi">Web Development </option>
          <option value="uxdi">User Expierence</option>
          <option value="dsi">Data Science</option>
          </Select>
        </Course>
        <StartDate>
          <Label htmlFor="start_date">Start Date</Label>
          <Input type="date" name="start_date" value={this.state.start_date} onChange={this.handleChange} ></Input>
        </StartDate>
        <EndDate>
          <Label htmlFor="end_date" placeholder="yyyy-mm-dd">End Date</Label>
          <Input type="date" name="end_date" value={this.state.end_date} onChange={this.handleChange} ></Input>
        </EndDate>
        <br/><Button type="submit">Submit</Button>
      </Form>
      </Container>
    </React.Fragment>
   );
  }
}

export default NewCohortForm;
