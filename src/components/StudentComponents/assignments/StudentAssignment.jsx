import React, { Component } from "react";
import styled from "styled-components";
import checkmark from "./../../../assets/Icons/tick.svg";
import exclamation from "./../../../assets/Icons/warning.svg";
import { formattedDate } from "./../../../utilities";

class StudentAssignment extends Component {
  state = {};

  assignmentSubmitted = () => {
    return this.props.submission;
  };
  assignmentOverDue = () => {
    return (
      !this.props.submission && Date.now() - Date.parse(this.propsdue_date) > 0
    );
  };

  submissionStatus = () => {
    if (this.assignmentSubmitted()) {
      return "#17B57E";
    } else if (this.assignmentOverDue()) {
      return "#FC3404";
    }
  };

  render() {
    const {
      name,
      body,
      dueDate,
      data,
      student,
      onAssignmentClick
    } = this.props;

    const submissionInfoToDisplay = () => {
      if (this.assignmentSubmitted()) {
        return (
          <div className="studentSubmissionStatus">
            <div className="checkmarkContainer">
              <img className="checkmark" src={checkmark} alt="submitted" />
            </div>
            <div className="submissionStatusText">
              submitted:
              <br />
              {formattedDate(this.props.submission.created_at)}
            </div>
          </div>
        );
      } else {
        return (
          <div className="studentSubmissionStatus">
            <div className="checkmarkContainer">
              <img className="checkmark" src={exclamation} alt="Overdue" />
            </div>
            <div className="submissionStatusText">
              overdue
              <br />
            </div>
          </div>
        );
      }
    };

    return (
      <div
        className="assignmentItem"
        onClick={e => {
          onAssignmentClick(data);
        }}
        style={{
          border: this.props.isActive
            ? "1px solid  #e6e6e6"
            : "1px solid transparent",
          backgroundColor: this.props.isActive ? "#f4f4f4" : ""
        }}
      >
        <div className="assignmentItemDetails">
          <div>{name}</div>
          <div className="date">Due: {formattedDate(dueDate)}</div>
        </div>
        {submissionInfoToDisplay()}
      </div>
    );
  }
}

export default StudentAssignment;
