import React, { Component } from "react";
import styled from "styled-components";
import { formattedDate } from "../../../utilities";

class StudentEvent extends Component {
  state = {};

  render() {
    return (
      <div
        className="assignmentItem"
        onClick={e => {
          this.props.onEventClick(this.props.data);
        }}
      >
        <div className="assignmentItemDetails">
          <div>
            {this.props.data.event_type}: {this.props.data.name}
          </div>
          <div className="date">{formattedDate(this.props.data.date)}</div>
        </div>
      </div>
    );
  }
}

export default StudentEvent;
