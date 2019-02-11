import React, { Component } from 'react';
import StudentStyles from './../../Student.css'


// INCLUDES COHORT DETAILS/S

class StudentCohortDetails extends Component {
  state = {  }
  render() {

    const { name, course_type, end_date, start_date } = this.props

    return (
      <React.Fragment>
        <div className="infoCard">
          <p>{name}</p>
          <p>{course_type}</p>
          <p>{start_date}</p>
          <p>{end_date}</p>
        </div>

      </React.Fragment>

     );
  }
}

export default StudentCohortDetails;

 // Name, course_type, start/end date, students, staff,
