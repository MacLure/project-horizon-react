import React, { Component } from 'react';
import StudentStyles from './../../Student.css'
import StudentProgressCircle from './StudentProgressCircle';


// INCLUDES COHORT DETAILS/S

class StudentCohortDetails extends Component {
  state = {  }








  
  render() {

    const { name, course_type, end_date, start_date, studentFirstName, studentLastName, assignments, submissions } = this.props

    const assignmentProgress = () => {
      return Math.round( submissions.length / assignments.length * 100)
    }
    
    const assignmentDueDatePassed = (assignment) => {return (Date.now() - Date.parse(assignment.due_date) > 0)}
    const assignmentSubmitted = (assignment) => {return (this.props.submissions.filter(submission => submission.assignment_id === assignment.id).length > 0)}
    const assignmentOverDue = (assignment) => {return (assignmentDueDatePassed(assignment) && !assignmentSubmitted(assignment))}
    const assignmentUnsubmitted = (assignment) => {return (!assignmentSubmitted(assignment))}

    const overdueAssignments = (assignments.length === 0) ? '' : assignments.filter(assignment => assignmentOverDue(assignment)).length
    const pendingAssignments = (assignments.length === 0) ? '' : assignments.filter(assignment => assignmentUnsubmitted(assignment)).length


    const progressStatus = () => {
      if (overdueAssignments === 0 && pendingAssignments === 0) {
        return "up to date"
      } else if (overdueAssignments === 0 && pendingAssignments > 0) {
        return (`unsubmitted assignments: ${pendingAssignments}` )
      } else if (overdueAssignments > 0 && pendingAssignments > 0 && overdueAssignments !== pendingAssignments) {
        return (`unsubmitted assignments: ${pendingAssignments}, ${overdueAssignments} overdue`)
      } else if (overdueAssignments > 0 && pendingAssignments > 0) {
        return (`${pendingAssignments} overdue assignments`)
      }
    }

    const options = {year: 'numeric', month: 'short', day: 'numeric' };
    const formattedStartDate = new Date(Date.parse(start_date)).toLocaleString('en', options)
    const formattedEndDate = new Date(Date.parse(end_date)).toLocaleString('en', options)
    const courseDays = Math.trunc((Date.parse(end_date) - Date.parse(start_date)) / (1000 * 60 * 60 * 24))
    const daysLeft = Math.trunc((Date.parse(end_date) - Date.now()) / (1000 * 60 * 60 * 24))
  
    const daysLeftDisplay = () => {
      if (daysLeft > courseDays){
        return `Starts on ${formattedStartDate.toLocaleString('en', options)}.`
      } else if (daysLeft <= 0 ) {
        return `Ended on ${formattedEndDate.toLocaleString('en', options)}.`
      } else if (daysLeft > 0){
        return `${daysLeft} days left`
      }
    }

    return (
        <div className="infoCard">
          <p>{studentFirstName} {studentLastName}</p>
          <p>{name}</p>
          <p>{course_type}</p>
          <p>{formattedStartDate}</p>
          <p>{formattedEndDate}</p>
          <p>{daysLeftDisplay()}</p>
          <StudentProgressCircle progress={assignmentProgress}/>
          <p>assignment progress: {assignmentProgress()}%</p>
          <p>{progressStatus()}</p>
        </div>


     );
  }
}

export default StudentCohortDetails;

 // Name, course_type, start/end date, students, staff,
