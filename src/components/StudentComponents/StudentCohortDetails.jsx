import React, { Component } from "react";
import StudentProgressCircle from "./StudentProgressCircle";
import { formattedDate } from "./../../utilities";

// INCLUDES COHORT DETAILS/S

class StudentCohortDetails extends Component {
  state = {};

  render() {
    const {
      name,
      course_type,
      end_date,
      start_date,
      studentFirstName,
      studentLastName,
      assignments,
      submissions
    } = this.props;

    const assignmentProgress = () => {
      return Math.round((submissions.length / assignments.length) * 100);
    };

    const courseDays = Math.trunc(
      (Date.parse(end_date) - Date.parse(start_date)) / (1000 * 60 * 60 * 24)
    );
    const daysLeft = Math.trunc(
      (Date.parse(end_date) - Date.now()) / (1000 * 60 * 60 * 24)
    );

    const daysLeftDisplay = () => {
      if (daysLeft > courseDays) {
        return `Starts on ${formattedDate(start_date)}`;
      } else if (daysLeft <= 0) {
        return `Ended on ${formattedDate(end_date)}.`;
      } else if (daysLeft > 0) {
        return `${daysLeft} days left`;
      }
    };

    return (
      <div className="infoCard">
        <div className="studentName">
          {studentFirstName} {studentLastName}
        </div>
        <div>
          {course_type} {name}
        </div>
        <div className="date">
          {formattedDate(start_date)} - {formattedDate(end_date)}
        </div>
        <div className="date">{daysLeftDisplay()}</div>
        <StudentProgressCircle progress={assignmentProgress()} />
      </div>
    );
  }
}

export default StudentCohortDetails;
