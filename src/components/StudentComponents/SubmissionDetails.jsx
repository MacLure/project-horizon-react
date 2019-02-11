import React, { Component } from 'react';
import SubmissionComment from './../CommonComponents/SubmissionComment'

class SubmissionDetails extends Component {


  render() {
    const {name, body, url, created_at} = this.props.submission
    const submissionComments = this.props.submissionComments

    return (
      <React.Fragment>
      <h1>submissionDetails:</h1>
      {name}
      <a href={url}>{url}</a>
      {body}
      Submitted on {created_at}
      {submissionComments.map(comment => (
        <SubmissionComment
          key = {comment.id}
          admin = {comment.admin_id}
          date = {comment.created_ad}
          body = {comment.body}
        />
      ))}
      </React.Fragment>
    );
  }

}

export default SubmissionDetails;
