import React, { Component } from 'react';
import StudentStyles from './../../Student.css'
import StudentEvent from './StudentEvent';

// MAY NEED THIS
// -------------------------------------------
// const Container = styled.div`
//   background-color: inherit
//   margin: 20px 10px;
//   width: 25vw;
//   border-radius: 2px;
//   grid-column-start: 1;
//   justify-self: center;
//   transition: 0.3s;
//   opacity: 1;
//   cursor: pointer;
//   display: flex;
//   justify-content: flex-start;
//
//   :hover {
//     opacity: 0.5;
//     transition: 0.3s;
// }`

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
    <div className="eventsContainer">
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
