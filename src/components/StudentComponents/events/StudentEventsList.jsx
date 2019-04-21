import React, { Component } from "react";
import StudentEvent from "./StudentEvent";

class StudentEventsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedEvent: null,
      events: [],
      assignments: [],
      submissions: [],
      submission_comments: []
    };

    this.onEventClick = this.onEventClick.bind(this);
  }

  reload = () => {};

  onEventClick = data => {
    this.setState({
      selectedEvent: this.props.events.indexOf(data)
    });
    this.props.getOnFocusData(data);
  };

  getEventInfo = () =>
    this.setState({
      events: this.props.events
    });

  render() {
    return (
      <div className="assignmentlist">
        <h2 className="sectionTitle">Events</h2>

        {this.props.events.map((event, index) => (
          <StudentEvent
            key={event.id}
            data={event}
            onEventClick={this.onEventClick}
            isActive={this.state.selectedEvent === index}
          />
        ))}
        <div style={{ height: "10px", backgroundColor: "white" }} />
      </div>
    );
  }
}

export default StudentEventsList;
