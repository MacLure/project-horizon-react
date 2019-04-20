import React, { Component } from "react";
import styled from "styled-components";
import { formattedDate } from "../../../utilities";

class StudentEvent extends Component {
  state = {};

  render() {
    return (
      <div
        className="eventItem"
        onClick={e => {
          this.props.onEventClick(this.props.data);
        }}
      >
        <div className="eventItemDetails">
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
