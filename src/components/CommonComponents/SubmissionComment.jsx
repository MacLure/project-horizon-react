import React, { Component } from 'react';
class SubmissionComment extends Component {

  render() {

    const {admin, date, body} = this.props\

    return (
      <React.Fragment>
        {admin}, {date}, {body}
      </React.Fragment>
    );
  }

}

export default SubmissionComment;
