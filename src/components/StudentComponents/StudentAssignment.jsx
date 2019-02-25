import React, { Component } from 'react';
import styled from 'styled-components';
import checkmark from './../../assets/Icons/checkmark.svg'
import exclamation from './../../assets/Icons/exclamation.svg'


class StudentAssignment extends Component {
  state = {  }



  options = {year: 'numeric', month: 'short', day: 'numeric' };

  assignmentSubmitted = () => {return (this.props.submission)}
  assignmentOverDue = () => {return (!this.props.submission && (Date.now() - Date.parse(this.propsdue_date) > 0))}

    submissionStatus = () => {
      if (this.assignmentSubmitted()) {
        return '#17B57E'
      } else if (this.assignmentOverDue()) {
        return '#FC3404'
      }
    }

  render() {
    const { name, body, dueDate, data, student, onAssignmentClick } = this.props

    const submissionInfoToDisplay = () => {
      if (this.assignmentSubmitted()) {
        return (
          <div className="studentSubmissionStatus">
            <div className="checkmarkContainer"><img className="checkmark" src={checkmark} /></div>
            <div className="submissionStatusText">
              submitted:<br />
              {new Date(Date.parse(this.props.submission.created_at)).toLocaleString('en', this.options)}
            </div>
          </div>
        )
      } else {
        return (
          <div className="studentSubmissionStatus">
            <div className="checkmarkContainer"><img className="checkmark" src={exclamation} /></div>
            <div className="submissionStatusText">
              overdue<br />
            </div>
          </div>
        )
      }
    }

    return (
      <div className="assignmentItem" onClick={e=>{onAssignmentClick(data)}}>
        <div className="assignmentItemDetails">
          <div>{name}</div>
          <div className="date">Due: {new Date(Date.parse(dueDate)).toLocaleString('en', this.options)}</div>
        </div>
          {submissionInfoToDisplay()}
      </div>
     );
  }
}

export default StudentAssignment;
