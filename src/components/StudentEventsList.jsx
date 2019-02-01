import React, { Component } from 'react';
import styled from 'styled-components';
import StudentEvent from './StudentEvent';

const EventsCard = styled.div`
  background-color: #2A2C33;
  margin: 20px 10px;
  width: 500px;
  height: 650px;
  border-radius: 2px;
  grid-column-start: 1;
  gird-row-start: 2;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`


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
  render() {
    const events = this.state.events

  return (
    <EventsCard>
    {events.map(event => (
      <StudentEvent
        key={event.id}
        name={event.name}
        body={event.body}
        date={event.date}
        time={event.time}
      />
        ))}
    </EventsCard>
    );
  }
}

export default StudentEventsList;
