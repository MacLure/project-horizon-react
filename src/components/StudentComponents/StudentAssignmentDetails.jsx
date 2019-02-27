import React, { Component } from 'react';
import SubmissionComment from '../CommonComponents/SubmissionComment'
import StudentStyles from './../../Student.css'
import { connect } from 'react-redux';
import  {deleteSubmission} from '../../service';
import  {editSubmission} from '../../service';



class StudentAssignmentDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

const assignment = this.props.assignment
const submission = this.props.submission

const options = {year: 'numeric', month: 'short', day: 'numeric' };


    return (
      <div>
        <h2 className="AssignmentTitle">{assignment.name}</h2>
        <div className="date">Due: {new Date(Date.parse(assignment.due_date)).toLocaleString('en', options)}</div>
        <div>{assignment.body}</div>
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
)(StudentAssignmentDetails);
