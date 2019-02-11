// CURRENTLY NOT BEING USED

import React, { Component } from 'react';
import styled from 'styled-components';

const EventsCard = styled.div`
  background-color: #64646C;
  margin: 20px 10px;
  width: 300px;
  height: 400px;
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

class AdminEventsList extends Component {
  constructor(props) {
    super(props)
  this.state ={
  }

}
  render() {

  return (
    <EventsCard>
      <p>Events</p>
    </EventsCard>
    );
  }
}

export default AdminEventsList;
