import React, { Component } from "react";
import SubmissionComment from "../CommonComponents/SubmissionComment";
import StudentStyles from "./../../Student.css";
import { connect } from "react-redux";
import { deleteSubmission } from "../../service";
import { editSubmission } from "../../service";
import { formattedDate } from "./../../utilities";

class StudentSubmissionComments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const assignment = this.props.assignment;
    const submission = this.props.submission;
    const admins = this.props.admins;
    const comments = this.props.comments.filter(
      comment => comment.submission_id === submission.id
    );

    return (
      <div>
        <h2 className="sectionTitle">Outcomes Comments</h2>
        {comments.map(comment => (
          <div key={comment.id} className="submittionComment">
            <div>
              <div>
                {
                  admins.filter(admin => admin.id === comment.admin_id)[0]
                    .first_name
                }{" "}
                {
                  admins.filter(admin => admin.id === comment.admin_id)[0]
                    .last_name
                }
              </div>
              <div className="inlineDate">
                {formattedDate(comment.created_at)}
              </div>
            </div>
            <div className="submissionCommentBody">{comment.body}</div>
          </div>
        ))}
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
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    onTokenReceive: token =>
      dispatch({ type: "SET_USER_TOKEN", payload: token })
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(StudentSubmissionComments);
