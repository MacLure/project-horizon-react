import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {createNewStudent} from './../../service';
import AdminStyles from './../../Admin.css';

class NewStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cohort_id: this.props.cohortId,
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      image_url: '',
      password: 'password'

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value.toLowerCase()});
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    let data = this.state
    createNewStudent(data, this.props.token)
    .then(e=>e.json())
    .then(e=>this.props.studentSuccess())
    .then(this.props.escapeNewStudentModal)

  }

 render() {
   return (
     <div className="modal">
     <div className="modalContainer">
      <div className="modalEscape"  onClick={this.props.escapeNewStudentModal}>×</div>
        <h2 className="formTitle">Add Student</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="one">
            <label htmlFor="first_name">First Name</label>
            <input type="text" name="first_name" placeholder="John"  value={this.state.first_name} onChange={this.handleChange}></input>
          </div>
          <div className="two">
            <label htmlFor="last_name">Last Name</label>
            <input type="text" name="last_name" placeholder="Smith"  value={this.state.last_name} onChange={this.handleChange}></input>
          </div>
          <div className="three">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" name="phone" placeholder="555-555-5555"  value={this.state.phone} onChange={this.handleChange}></input>
          </div>
          <div className="four">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="hello@mail.com" value={this.state.email} onChange={this.handleChange}></input>
          </div>
         <br/><button className="submitButton" type="submit">Submit</button>
       </form>
      </div>
    </div>
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
)(NewStudentForm);
