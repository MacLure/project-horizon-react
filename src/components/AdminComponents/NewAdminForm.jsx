import React, { Component } from 'react';
import styled from 'styled-components';

const ModalBG = styled.div`
background-color: rgba(0, 0, 0, 0.5);
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
`

const Container = styled.div`
background-color: #2A2C33;
margin-top: 20px;
margin-left: auto;
margin-right: auto;
width: 40vw;
border-radius: 2px;
grid-column-start: 1;
justify-self: center;
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
height: 500px;
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
const FirstName = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  background-color: inherit;
`

const LastName = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  background-color: inherit;
`

const Phone = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;
  background-color: inherit;
`

const Email = styled.div`
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
    border: 1px solid #FC6404;
    transition: border 0.5s;
  }
`

const Button = styled.button`
  margin: 30px auto;
  margin-left: 0;
  padding-left: 0;
  cursor: pointer;
  padding: 5px 10px;
  background-color: #2C65F9;
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

class NewAdminForm extends Component {
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
    this.setState({[event.target.name]: event.target.value.toLowerCase()});
  }

  handleSubmit(event) {
    event.preventDefault();
      // fetch('http://localhost:3000/api/admin/cohorts', {
      let data = this.state
      console.log(data);
        fetch(`https://project-horizon-rails.herokuapp.com/api/admin/students?student=${JSON.stringify(data)}`, {
        method: 'post',
        mode: "cors"
      }).then(response => {console.log(this.state)})
      .then(this.props.escapeNewAdminModal)
  }

 render() {
   return (
     <React.Fragment>
     <ModalBG>
     <Container>
      <ModalEscape  onClick={this.props.escapeNewAdminModal}>×</ModalEscape>
        <Title>Add Admin</Title>
        <Form method="post" onSubmit={this.handleSubmit}>
          <FirstName>
            <Label htmlFor="first_name">First Name</Label>
            <Input type="text" name="first_name" placeholder="John"  value={this.state.first_name} onChange={this.handleChange}></Input>
          </FirstName>
          <LastName>
            <Label htmlFor="last_name">Last Name</Label>
            <Input type="text" name="last_name" placeholder="Smith"  value={this.state.last_name} onChange={this.handleChange}></Input>
          </LastName>
          <Phone>
            <Label htmlFor="phone">Phone Number</Label>
            <Input type="tel" name="phone" placeholder="555-555-5555"  value={this.state.phone} onChange={this.handleChange}></Input>
          </Phone>
          <Email>
            <Label htmlFor="email">Email</Label>
            <Input type="text" name="email" placeholder="hello@mail.com" value={this.state.email} onChange={this.handleChange}></Input>
          </Email>
         <br/><Button type="submit">Submit</Button>
       </Form>
      </Container>
      </ModalBG>

     </React.Fragment>
    );
 }
}

export default NewAdminForm;
