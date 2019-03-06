import React, { Component } from 'react';
import StudentAssignment from './StudentAssignment';
import StudentStyles from './../../Student.css'
import SubmissionDetails from './SubmissionDetails';
import NewSubmissionForm from './NewSubmissionForm';
import StudentCohortDetails from './StudentCohortDetails';


class StudentAssignmentsList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedAssignment: null,
      onFocusData: null,
      assignments: [],
      submissions: [],
      submission_comments: [],
    }

    this.onAssignmentClick = this.onAssignmentClick.bind(this)

  }

  reload = () =>{
    console.log("OK")
  }

  onAssignmentClick = (data) => {
    this.setState({
      onFocusData:data,
      selectedAssignment:this.props.assignments.indexOf(data)
    })
    this.props.getOnFocusData(data);

  }

  getAssignmentInfo = () => (
    this.setState( {
      assignments: this.props.assignments,
      submissions: this.props.submissions,
      submission_comments: this.props.submission_comments,
    })
  )



// documentDidMount() {
//   this.getAssignmentInfo()
// }



  render() {

  const {assignments, submissions, student, getOnFocusData, submissionComments} = this.props


    
    return (
      <div className="assignmentlist">
      <StudentCohortDetails 
      studentFirstName={this.props.student.first_name}
      studentLastName={this.props.student.last_name}
      name={this.props.cohort.name}
      course_type={this.props.cohort.course_type}
      start_date={this.props.cohort.start_date}
      end_date={this.props.cohort.end_date}
      submissions={this.props.submissions}
      assignments={this.props.assignments}

      />
        {assignments.map((assignment, index) => (
          <StudentAssignment
            key={assignment.id}
            id={assignment.id}
            name={assignment.name}
            body={assignment.body}
            dueDate={assignment.due_date}
            data={assignment}
            onAssignmentClick={this.onAssignmentClick}
            isActive={this.state.selectedCohort === index}
            submission={this.props.submissions.filter(submission => submission.assignment_id === assignment.id)[0]}
            student={this.props.student}
          />
        ))}
      </div>
     );
  }
}

export default StudentAssignmentsList;