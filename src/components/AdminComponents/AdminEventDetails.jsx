import React, { Component } from 'react';
import styled from 'styled-components';
import  {deleteEvent} from '.././../service';
import { connect } from 'react-redux';



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

class AdminEventDetails extends Component {
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

    this.handleDelete = this.handleDelete.bind(this);

  }



  handleDelete = (e) => {
    e.preventDefault();
    let event_id = this.props.event.id
    deleteEvent(event_id, this.props.token)
    .then(e=>this.props.deleteSuccess())
    .then(this.props.escapeEventDetailsModal)

  }

 render() {
   return (
     <React.Fragment>
     <ModalBG>
     <Container>
      <ModalEscape  onClick={this.props.escapeEventDetailsModal}>×</ModalEscape>
        <Title>{this.props.event.name}</Title>
        <p>{this.formattedDate} @ {this.hour}:{this.minute}</p>
        <p>{this.props.event.body}</p>
        <button onClick={e=>{this.handleDelete(e)}} >Delete Cohort</button>

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
)(AdminEventDetails);