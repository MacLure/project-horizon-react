import React, { Component } from 'react';
import StudentStyles from './../../Student.css'


// INCLUDES COHORT DETAILS/S

class StudentCohortDetails extends Component {
  state = {  }
  render() {

    const { name, course_type, end_date, start_date } = this.props

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
      <React.Fragment>
        <div className="infoCard">
          <p>{name}</p>
          <p>{course_type}</p>
          <p>{formattedStartDate}</p>
          <p>{formattedEndDate}</p>
          <p>{daysLeftDisplay()}</p>

        </div>

      </React.Fragment>

     );
  }
}

export default StudentCohortDetails;

 // Name, course_type, start/end date, students, staff,
