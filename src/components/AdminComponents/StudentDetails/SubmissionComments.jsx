import React, { Component } from "react";

class SubmissionComments extends Component {
  state = {
    comments: this.props.comments.filter(
      comment => comment.submission_id === this.props.submission.id
    ),
    admins: this.props.admins
  };

  render() {
    return (
      <div style={{ backgroundColor: "orange" }}>
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
            <div>{comment.body}</div>
            <div>{comment.created_at}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default SubmissionComments;
