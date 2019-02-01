import React, { Component } from 'react';

class SubmissionDetails extends Component {


  render() {
    const {name, body, dueDate} = this.props

    return (
      <React.Fragment>
        <p>{name}</p>
        <p>{body}</p>
        <p>{dueDate}</p>
      </React.Fragment>
    );
  }

}

export default SubmissionDetails;
