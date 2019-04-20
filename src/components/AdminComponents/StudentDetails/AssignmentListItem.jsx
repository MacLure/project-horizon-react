import React, { Component } from "react";
import checkmark from "./../../../assets/Icons/tick.svg";
import exclamation from "./../../../assets/Icons/warning.svg";
import { formattedDate } from "./../../../utilities";

class AssignmentListItem extends Component {
  state = {};
  render() {
    return (
      <div
        className="eventItem"
        onClick={e => {
          this.props.onAssignmentClick(this.props.assignment);
        }}
        style={{
          border: this.props.isActive
            ? "2px solid  #e6e6e6"
            : "2px solid transparent",
          backgroundColor: this.props.isActive ? "white" : ""
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "9fr 1fr"
          }}
        >
          <div>
            <div>{this.props.assignment.name}</div>
            <div className="eventAssignmentDates">
              {this.props.submissions.filter(
                submission =>
                  submission.assignment_id === this.props.assignment.id &&
                  submission.student_id === this.props.student.id
              ).length > 0
                ? `submitted: ${formattedDate(
                    this.props.submissions.filter(
                      submission =>
                        submission.assignment_id === this.props.assignment.id &&
                        submission.student_id === this.props.student.id
                    )[0].created_at
                  )}`
                : "not submitted"}
            </div>
          </div>
          <div>
            <img
              style={{ height: "35px" }}
              src={
                this.props.submissions.filter(
                  submission =>
                    submission.assignment_id === this.props.assignment.id &&
                    submission.student_id === this.props.student.id
                ).length > 0
                  ? checkmark
                  : exclamation
              }
              className="checkmarkContainer"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AssignmentListItem;
