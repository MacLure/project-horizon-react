import React, { Component } from 'react';
import StudentStyles from './../../Student.css'
import StudentEvent from './StudentEvent';

class StudentEventsList extends Component {
  constructor(props) {
    super(props)
    this.state ={
      events: this.props.events
    }
  }

  options = {year: 'numeric', month: 'short', day: 'numeric' };

  render() {
    const events = this.props.events

    return (
      <div className="assignmentContainer">
        <div className="assignmentlist">
          {events.map( event => (
            <div
              className="eventItem"
              key={event.id}
              onClick={()=>{this.props.TriggerEventDetails(event)}}
            >
              <div>{event.event_type}: {event.name}</div>
              <div className="date">{new Date(Date.parse(event.date)).toLocaleString('en', this.options)} @ {new Date(Date.parse(event.time)).getHours()}:{new Date(Date.parse(event.time)).getMinutes()}</div>
              <div className="date">{event.location}</div>

            </div>
          ))}
        </div>
        <div className="submissionContainer">
      </div>
      </div>
      );
    }
}

export default StudentEventsList;
