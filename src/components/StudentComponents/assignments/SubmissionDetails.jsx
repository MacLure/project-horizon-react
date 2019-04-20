import React, { Component } from "react";
import StudentStyles from "./../../../Student.css";
import SubmissionComment from "./../../CommonComponents/SubmissionComment.jsx";
import { connect } from "react-redux";
import { deleteSubmission } from "../../../service";
import trash from "../../../assets/Icons/trash.svg";
import { formattedDate } from "./../../../utilities";

class SubmissionDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submission: this.props.submission,
      assignment: this.props.assignment,
      comments: this.props.submissionComments
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleDelete = e => {
    e.preventDefault();
    let submissionId = this.state.submission.id;
    deleteSubmission(submissionId, this.props.token).then(e =>
      this.props.deleteSuccess()
    );
  };

  render() {
    const submissionComments = [].concat.apply(
      [],
      this.props.submissionComments
    );
    return (
      <React.Fragment>
        <div className="submission">
          <h2 className="sectionTitle" />
          <div className="deleteSubmissionButton" onClick={this.handleDelete}>
            <img className="deleteIcon" src={trash} alt="delete" />
          </div>
        </div>
        <div className="submissionDetails">
          <div className="date">
            Submitted on {formattedDate(this.props.submission.created_at)}
          </div>
          <div className="submissionBody">
            <a href={this.state.submission.url}>{this.props.submission.url}</a>
            {this.props.submission.body}
          </div>
        </div>
        ;
        {submissionComments.map(comment => (
          <SubmissionComment
            key={comment.id}
            admin={comment.admin_id}
            date={comment.created_ad}
            body={comment.body}
          />
        ))}
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
)(SubmissionDetails);
