import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {editCohort} from './../../service';
import AdminStyles from './../../Admin.css';


class EditCohortForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    name: this.props.cohort.name,
    course_type: this.props.cohort.type,
    start_date: this.props.cohort.start_date,
    end_date: this.props.cohort.end_date,
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
    let cohortId = this.props.cohort.id
    editCohort(cohortId, data, this.props.token)
    .then(e=>e.json())
    .then(e=>this.props.cohortSuccess())
    .then(this.props.escapeEditCohortModal)

  }

  render() {
    document.body.style.backgroundColor = '#212229';
    return (
      <div className="modal">
        <div className="modalContainer">
        <div className="modalEscape"  onClick={this.props.escapeEditCohortModal}>×</div>
        <h2 className="formTitle">Edit Cohort</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="one">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder={"Cohort Name"} name="name" value={this.state.name} onChange={this.handleChange} ></input>
          </div>
          <div className="two">
            <label htmlFor="course_type">Course Type</label>
            <select name="course_type" value={this.state.course_type} onChange={this.handleChange} >
              <option value="" hidden>Select a course</option>
              <option value="wdi">Web Development </option>
              <option value="uxdi">User Expierence</option>
              <option value="dsi">Data Science</option>
              </select>
          </div>
          <div className="three">
            <label htmlFor="start_date">Start Date</label>
            <input type="date" name="start_date" placeholder={this.props.cohort.start_date} value={this.state.start_date} onChange={this.handleChange} ></input>
            <br/><button className="submitButton" type="submit">Submit</button>
          </div>
          <div className="four">
            <label htmlFor="end_date" placeholder={this.props.cohort.end_date}>End Date</label>
            <input type="date" name="end_date" value={this.state.end_date}  onChange={this.handleChange} ></input>
          </div>
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
)(EditCohortForm);
