import React, { Component } from 'react';
import StudentEvent from './StudentEvent';
import StudentStyles from './../../Student.css'
import SubmissionDetails from './SubmissionDetails';
import NewSubmissionForm from './NewSubmissionForm';
import StudentCohortDetails from './StudentCohortDetails';


class StudentAssignmentsList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      onFocusData: null,
      events: [],
      assignments: [],
      submissions: [],
      submission_comments: [],
    }

    this.onEventClick = this.onEventClick.bind(this)

  }

  reload = () =>{
  }

  onEventClick = (data) => {
    this.setState({
      onFocusData:data,
    })
    this.props.getOnFocusData(data);

  }

  getAssignmentInfo = () => (
    this.setState( {
      events: this.props.events,
    })
  )

  render() {

    return (
      <div className="assignmentlist">
        {this.props.events.map((event, index) => (
          <StudentEvent
            key={event.id}
            data={event}
            onEventClick={this.onEventClick}
          />
        ))}
      </div>
     );
  }
}

export default StudentAssignmentsList;