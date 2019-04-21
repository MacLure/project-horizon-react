import React, { Component } from "react";
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
        style={{
          border: this.props.isActive
            ? "1px solid  #e6e6e6"
            : "1px solid transparent",
          backgroundColor: this.props.isActive ? "#f4f4f4" : ""
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
