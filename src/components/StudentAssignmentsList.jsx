import React, { Component } from 'react';
import StudentAssignment from './StudentAssignment';
import StudentProgressCircle from './StudentProgressCircle';
import styled from 'styled-components';

class StudentAssignmentsList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedAssignment: null,
      onFocusData: null,
      submissions: this.props.submissions,
      submission_comments: this.props.submission_comments,
      assignments: this.props.assignments
    }

    this.onAssignmentClick = this.onAssignmentClick.bind(this)

  }

  onAssignmentClick = (data) => {
    console.log('Assignment Data',data)
    this.setState({
      onFocusData:data,
      selectedAssignment:this.state.assignments.indexOf(data)
    })
  }

  render() {

    const assignments = this.props.assignments
    const submissions = this.props.submissions
    const assignmentProgress = () => {
        return Math.round( submissions.length / assignments.length * 100)
    }

    return (
      <React.Fragment>
        <p style={{textAlign:'center'}}>progress: {assignmentProgress()}%</p>
        <div style={{marginLeft:"500px"}}>
        <StudentProgressCircle progress={assignmentProgress}/>
        </div>
        {assignments.map(assignment => (
        <StudentAssignment
          key={assignment.id}
          name={assignment.name}
          body={assignment.body}
          dueDate={assignment.due_date}
        />
        ))}
      </React.Fragment>
     );
  }
}

export default StudentAssignmentsList;
