import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import  {createNewAssignment} from './../../service';

const ModalBG = styled.div`
background-color: rgba(0, 0, 0, 0.5);
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
`

const Container = styled.div`
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
  grid-column-start: 2;
  grid-row-start: 2;
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
  padding-left: 80px;
  background-color: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3;
`

const AssignmentName = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  background-color: inherit;
`

const DueDate = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  background-color: inherit;
`
const AssignmentBody = styled.div`
  background-color: inherit;
  padding-left: 80px;
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

const Textarea = styled.textarea`
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
  margin: 10px auto 30px 80px;
  cursor: pointer;
  padding: 5px 10px;
  background-color: #17B57E;
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

class NewAssignmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cohort_id: this.props.cohortId,
      name: '',
      due_date: '',
      body: ''
   }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    let data = this.state
    createNewAssignment(data, this.props.token)
    .then(e=>e.json())
    .then(e=>this.props.assignmentSuccess())
  }

  render() {
    return (
      <React.Fragment>
      <ModalBG>
      <Container>
       <ModalEscape  onClick={this.props.escapeNewAssignmentModal}>X</ModalEscape>
           <Title>Create Assignment</Title>
          <Form onSubmit={this.handleSubmit}>
            <AssignmentName>
              <Label htmlFor="name">Assignment Name</Label>
              <Input type="text" name="name" placeholder="Personal Branding"  value={this.state.name} onChange={this.handleChange}></Input>
            </AssignmentName>
            <DueDate>
              <Label htmlFor="due_date">Due Date</Label>
              <Input type="date" name="due_date" value={this.state.due_date} onChange={this.handleChange} ></Input>
            </DueDate>
            <AssignmentBody>
              <Label htmlFor="body">Assignment Body</Label>
              <Textarea rows="10" cols="38" name="body" placeholder="body" value={this.state.body} onChange={this.handleChange}></Textarea>
            </AssignmentBody>
            <br/>
            <Button type="submit">Submit</Button>
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
)(NewAssignmentForm);
