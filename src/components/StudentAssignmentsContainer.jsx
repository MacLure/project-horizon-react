import React, { Component } from 'react';
import styled from 'styled-components';
import StudentAssignmentsList from './StudentAssignmentsList';
import SubmissionDetails from './SubmissionDetails';
import SubmissionComments from './SubmissionComment';

const Container = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  border: 3px solid green;
  width: 500px;
  height: 500px;
  background-color: #2A2C33;

`

class StudentAssignmentsContainer extends Component {
  constructor(props) {
    super(props)

  this.state = {
    assignments: [],
    submissions: [],
    submission_comments: [],
    onFocusData: null,
    selectedAssignment: null
  }

  this.getAssignmentInfo = this.getAssignmentInfo.bind(this)

}

  getAssignmentInfo = () => {
    this.setState( {
      assignments: this.props.assignments,
      submissions: this.props.submissions,
      submission_comments: this.props.submission_comments,
      onFocusData: this.props.onFocusData
    })
  }

documentDidMount() {
  this.getAssignmentInfo()
}

onAssignmentClick = (data) => {
  console.log('Assignment Data',data)
  this.setState({
    onFocusData:data,
    selectedAssignment:this.props.assignments.indexOf(data)
  })
}

  render() {



    return (
      <React.Fragment>
        <Container>
          <StudentAssignmentsList
            submissions={this.props.submissions}
            assignments={this.props.assignments}
            submissionComments={this.props.submissionComments}
            onCohortClick={this.onAssignmentClick}
            />
        </Container>
      </React.Fragment>
    );
  }

}

export default StudentAssignmentsContainer;
