import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import  {createNewCohort} from './../service';


const Container = styled.div`
  background-color: #2A2C33;
  margin-top: 10px;
  width: 40vw;
  height: 300px;
  border-radius: 2px;
`

const Title = styled.h2 `
  padding: 20px 0px 15px 0px;
  background-color: inherit;
  text-align: center;
`

const Form = styled.form`
  text-align: left;
  background-color: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3;
  padding-left: 100px;
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
`

const Input = styled.input`
  border: 1px solid black;
  border-radius: 2px;
  padding: 5px 5px;
  transition: border 0.5s;

  :focus {
    border: 1px solid #F6744E;
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
    border: 1px solid #F6744E;
    transition: border 0.5s;
  }
`
const Button = styled.button`
  margin: 20px auto;
  cursor: pointer;
  padding: 5px 10px;
  background-color: #17B57E;
  border: none;
  transition: 0.3s;
  border-radius: 2px;
  font-size: 1.1em;
  text-align: center;
  grid-column-start: 1;
  grid-row-start: 3;

  :hover {
    box-shadow: 0 0 15px black;
    transition: box-shadow 0.3s;
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
    let data = this.state
    createNewCohort(data, this.props.token)
    .then(e=>e.json())
    .then(e=>this.props.cohortSuccess())
  }


  render() {
<<<<<<< HEAD
    document.body.style.backgroundColor = '#212229';

=======
    
>>>>>>> master
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
          <br/><Button type="submit">Submit</Button>
        </StartDate>
        <EndDate>
          <Label htmlFor="end_date" placeholder="yyyy-mm-dd">End Date</Label>
          <Input type="date" name="end_date" value={this.state.end_date} onChange={this.handleChange} ></Input>
        </EndDate>
      </Form>
      </Container>
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
)(NewCohortForm);
