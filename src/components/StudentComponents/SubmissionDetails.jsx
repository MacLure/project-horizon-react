import React, { Component } from 'react';
import SubmissionComment from './../CommonComponents/SubmissionComment'
import StudentStyles from './../../Student.css'
import { connect } from 'react-redux';
import  {deleteSubmission} from '.././../service';

class SubmissionDetails extends Component {

  handleDelete = (e) => {
    e.preventDefault();
    let submissionId = this.props.submission.id
    deleteSubmission(submissionId, this.props.token)
    .then(e=>this.props.deleteSuccess())
  }

  render() {
    const {name, body, url, created_at} = this.props.submission
    const submissionComments = [].concat.apply([], this.props.submissionComments);
    return (
      <React.Fragment>
      <h1>submissionDetails:</h1>
      {name}
      <a href={url}>{url}</a>
      {body}

      Submitted on {created_at}
      {submissionComments.map(comment => (
        console.log(submissionComments)))}

      <div className="deleteButton" onClick={e=>{this.handleDelete(e)}} >Delete Submission</div>
      
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
)(SubmissionDetails);
