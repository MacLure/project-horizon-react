import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import  {createNewEvent} from './../service';

const ModalBG = styled.div`
background-color: rgba(0, 0, 0, 0.5);
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
`

const Container = styled.div`
z-index: 10;
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
height: 500px;
background-color: #2A2C33;
margin-top: 20px;
margin-left: auto;
margin-right: auto;
width: 40vw;
border-radius: 2px;
grid-column-start: 1;
justify-self: center;
`
const ModalEscape = styled.div`
background-color: rgba(255,255,255,0.25);
width: 30px;
height: 30px;
position: absolute;
top: 0;
right: 0;
cursor: pointer;
text-align: center;
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
  margin: 0 auto;
  padding-left: 80px;
  background-color: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3;
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
    border: 1px solid #F6744E;
    transition: border 0.5s;
  }
`

const Button = styled.button`
  margin: 30px auto;
  margin-left: 0;
  padding-left: 0;
  cursor: pointer;
  padding: 5px 10px;
  background-color: #17B57E;
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
    transition: opacity 0.5s;
  }`

class NewEventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cohort_id: this.props.cohortId,
      name: '',
      company_id: '',
      contact_id: '',
      date: '',
      time: '',
      body: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }


  handleSubmit = (e) =>{
    e.preventDefault();
    let data = this.state
    createNewEvent(data, this.props.token)
    .then(e=>e.json())
    .then(e=>this.props.eventSuccess())
  }


 render() {
   return (
     <React.Fragment>
     <ModalBG>
     <Container>
      <ModalEscape  onClick={this.props.escapeNewEventModal}>X</ModalEscape>
        <Title>Add Event</Title>
        <Form method="post" onSubmit={this.handleSubmit}>
          <div>
            <Label htmlFor="first_name">Name</Label>
            <Input type="text" name="name" placeholder="Event Name"  value={this.state.name} onChange={this.handleChange}></Input>
          </div>
          <div>
            <Label htmlFor="last_name">date</Label>
            <Input type="date" name="date" placeholder="Date"  value={this.state.date} onChange={this.handleChange}></Input>
          </div>
          <div>
            <Label htmlFor="phone">time</Label>
            <Input type="time" name="time" placeholder="Time"  value={this.state.time} onChange={this.handleChange}></Input>
          </div>
          <div>
            <Label htmlFor="email">body</Label>
            <Input type="textArea" name="body" placeholder="Details" value={this.state.body} onChange={this.handleChange}></Input>
          </div>
         <br/><Button type="submit">Submit</Button>
       </Form>
      </Container>
      </ModalBG>
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
)(NewEventForm);
