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
    <div className="StudentEventsContainer">
    {events.map( event => (
      <div
        className="eventItem"
        key={event.id}
        onClick={()=>{this.props.TriggerEventDetails(event)}}>
        <p>{event.name}</p>
        <p>{new Date(Date.parse(event.date)).toLocaleString('en', this.options)} @ {new Date(Date.parse(event.time)).getHours()}:{new Date(Date.parse(event.time)).getMinutes()}</p>

      </div>
        ))}
    </div>
    );
  }
}

export default StudentEventsList;
