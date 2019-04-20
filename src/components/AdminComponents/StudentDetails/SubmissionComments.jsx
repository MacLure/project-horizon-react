import React, { Component } from "react";
import {
  createNewSubmissionComment,
  deleteSumissionComment
} from "./../../../service";
import { connect } from "react-redux";
import { formattedDate } from "./../../../utilities";

class SubmissionComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: this.props.admin,
      form: {
        admin_id: this.props.admin.id,
        submission_id: this.props.submission.id,
        body: ""
      },
      comments: this.props.comments.filter(
        comment => comment.submission_id === this.props.submission.id
      ),
      admins: this.props.admins
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      form: {
        admin_id: this.state.form.admin_id,
        submission_id: this.state.form.submission_id,
        body: event.target.value
      }
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    let data = this.state.form;
    createNewSubmissionComment(data, this.props.token)
      .then(e => e.json())
      .then(
        this.setState(prevState => ({
          comments: [...prevState.comments, data]
        }))
      );
  };

  handleDelete = comment => {
    deleteSumissionComment(comment, this.props.token);
  };

  render() {
    return (
      <div className="submissionComment">
        <h2>Submission Comments:</h2>
        {this.state.comments.map(comment => (
          <div key={comment.id}>
            <p className="paragraph">
              {
                this.state.admins.filter(
                  admin => admin.id === comment.admin_id
                )[0].first_name
              }{" "}
              {
                this.state.admins.filter(
                  admin => admin.id === comment.admin_id
                )[0].last_name
              }
            </p>
            {formattedDate(comment.created_at)}
            <div>{comment.body}</div>
            {comment.admin_id === this.state.admin.id ? (
              <div
                style={{
                  color: "white",
                  display: "inline-block",
                  backgroundColor: "black"
                }}
                onClick={e => {
                  this.handleDelete(comment.id);
                }}
              >
                DELETE
              </div>
            ) : null}
          </div>
        ))}
        <div class="newComment">
          <form
            className="commentForm"
            method="post"
            onSubmit={this.handleSubmit}
          >
            <textarea
              className="commentText"
              rows="4"
              cols="30"
              type="text"
              name="body"
              placeholder="new comment..."
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <button class="btn" type="submit">
              Submit
            </button>
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
)(SubmissionComments);
