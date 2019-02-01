import React, { Component } from 'react';
import styled from 'styled-components';
import StudentAssignmentsList from './StudentAssignmentsList';
import SubmissionDetails from './SubmissionDetails';
import SubmissionComments from './SubmissionComments';

const Container = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  backgroud-color: darkblue;
  width: 750px;
  height: 900px;

`

class StudentAssignmentsContainer extends Component {
  constructor(props) {
    super(props)

  this.state = {
    assignments: [],
    submissions: [],
    submission_comments: []
  }

  this.getAssignmentInfo = this.getAssignmentInfo.bind(this)

}

  getAssignmentInfo = () => {
    this.setState( {
      assignments: this.props.assignments,
      submissions: this.props.submissions,
      submission_comments: this.props.submission_comments
    })
  }

documentDidMount() {
  this.getAssignmentInfo()
}

  render() {

    return (
      <React.Fragment>
        <Container>
          <StudentAssignmentsList
            submissions={this.props.submissions}
            assignments={this.props.assignments}
            submission_comments={this.props.submission_comments}
            />
          <SubmissionDetails />
          <SubmissionComments />


        </Container>
      </React.Fragment>
    );
  }

}

export default StudentAssignmentsContainer;
