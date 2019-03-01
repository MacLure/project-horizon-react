import React, { Component } from 'react';
import SubmissionComment from '../CommonComponents/SubmissionComment'
import StudentStyles from './../../Student.css'
import { connect } from 'react-redux';
import  {deleteSubmission} from '../../service';
import  {editSubmission} from '../../service';



class StudentSubmissionComments extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

const assignment = this.props.assignment
const submission = this.props.submission
const comments = this.props.comments.filter(comment => comment.submission_id === submission.id)

const options = {year: 'numeric', month: 'short', day: 'numeric' };

  return (
    <div>
      <h2 className="AssignmentTitle">Outcomes Comments</h2>
      {
        comments.map(comment =><div key={comment.id}>{comment.admin_id}, {comment.submission_id}, {comment.body}<div className="date">on {new Date(Date.parse(comment.created_at)).toLocaleString('en', options)}</div></div>)
      }
      {
        comments.map(comment =>console.log(comment))
      }
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
)(StudentSubmissionComments);
