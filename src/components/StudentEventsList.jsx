import React, { Component } from 'react';
import styled from 'styled-components';
import StudentEvent from './StudentEvent';

const EventsCard = styled.div`
  background-color: red;
  margin: 20px 10px;
  width: 40vw;
  height: 15vh;
  border-radius: 2px;
  grid-column-start: 3;
  gird-row-start: 1;
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
  }

}
  render() {
    const events = this.props.events

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
