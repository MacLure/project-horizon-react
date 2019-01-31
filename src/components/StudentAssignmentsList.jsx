import React, { Component } from 'react';
import StudentAssignment from './StudentAssignment';
import StudentProgressCircle from './StudentProgressCircle';


class StudentAssignmentsList extends Component {
  state = {  }
  render() { 

    const assignments = this.props.assignments
    const submissions = this.props.submissions

    const assignmentProgress = () => {
        return Math.round( submissions.length / assignments.length * 100)
    }

    return ( 
      <div>
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
      </div>
     );
  }
}
 
export default StudentAssignmentsList;