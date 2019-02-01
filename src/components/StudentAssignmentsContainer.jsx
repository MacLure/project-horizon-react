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

  render() {

    const submissions = this.props.submissions
    const assignments = this.props.assignments
    const submission_comments = this.props.submission_comments

    return (
      <React.Fragment>
        <Container>
          <StudentAssignmentsList
            submissions={submissions}
            assignments={assignments}
            submission_comments={submission_comments}
            />
          <SubmissionDetails/>
          <SubmissionComments/>


        </Container>
      </React.Fragment>
    );
  }

}

export default StudentAssignmentsContainer;
