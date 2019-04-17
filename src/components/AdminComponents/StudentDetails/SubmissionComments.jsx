import React, { Component } from "react";
import {
  createNewSubmissionComment,
  deleteSumissionComment
} from "./../../../service";
import { connect } from "react-redux";

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
    const options = { year: "numeric", month: "short", day: "numeric" };

    return (
      <div className="submissionComment">
        submission Comments:
        {this.state.comments.map(comment => (
          <div key={comment.id}>
            <div>
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
            </div>
            {new Date(Date.parse(comment.created_at)).toLocaleString(
              "en",
              options
            )}
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
          NEW COMMENT
          <form method="post" onSubmit={this.handleSubmit}>
            <label htmlFor="body">Body</label>
            <input
              type="text"
              name="body"
              placeholder="new comment..."
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br />
            <button style={{ backgroundColor: "black" }} type="submit">
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
