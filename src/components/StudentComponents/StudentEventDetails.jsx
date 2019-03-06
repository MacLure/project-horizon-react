import React, { Component } from 'react';
import SubmissionComment from './../CommonComponents/SubmissionComment'
import StudentStyles from './../../Student.css'
import { connect } from 'react-redux';
import  {deleteSubmission} from '.././../service';
import  {editSubmission} from '.././../service';

class StudentEventDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      submission: this.props.submission,
      event: this.props.event,
      comments: this.props.submissionComments,
      event: this.props.event
    }
  }


  options = {year: 'numeric', month: 'short', day: 'numeric' };


  render() {
    const hour = new Date(Date.parse(this.props.event.time)).getHours()
    const minute = new Date(Date.parse(this.props.event.time)).getMinutes()

    const submissionComments = [].concat.apply([], this.props.submissionComments);
    return (
      <div>
        <h2 className="AssignmentTitle">{this.state.event.event_type}: {this.state.event.name}</h2>
        <div className="date">{new Date(Date.parse(this.state.event.date)).toLocaleString('en', this.options)} @ {hour}:{minute}</div>
        <div className="date">{this.state.event.location}</div>

        <div>{this.state.event.body}</div>
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
)(StudentEventDetails);
