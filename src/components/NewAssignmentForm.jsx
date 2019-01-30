import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
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
      name: '',
      due_date: '',
      cohort: '',
      body: ''
   }
   this.handleChange = this.handleChange.bind(this);
  }

   handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = () =>{
    console.log('On Submit')
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Title>Create Assignment</Title>
          <Form>
            <AssignmentName>
              <Label htmlFor="name">Assignment Name</Label>
              <Input type="text" name="name" placeholder="Personal Branding"  value={this.state.name} onChange={this.handleChange}></Input>
            </AssignmentName>
            <DueDate>
              <Label htmlFor="due_date">Due Date</Label>
              <Input type="date" name="due_date" value={this.state.due_date} onChange={this.handleChange} ></Input>
            </DueDate>
          </Form>
          <AssignmentBody>
            <Label htmlFor="body">Assignment Body</Label>
              <Textarea rows="10" cols="38" name="body" placeholder="body" value={this.state.body} onChange={this.handleChange}></Textarea>
          </AssignmentBody>
          <br/>
          <Button type="submit" onClick={e=>{
            e.preventDefault();
            this.handleSubmit()
            }}>Submit</Button>
        </Container>
     </React.Fragment>
     );
  }
}

export default NewAssignmentForm;
