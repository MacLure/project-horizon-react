import React, { Component } from 'react';
import styled from 'styled-components';

const EventsCard = styled.div`
  background-color: red;
  margin: 20px 10px;
  width: 40vw;
  height: 15vh;
  border-radius: 2px;
  grid-column-start: 3;
  gird-row-start: 1;
`

class StudentEvent extends Component {
  state = {  }


  render() {
    const { name, body, date, time } = this.props

    return (
      <React.Fragment>
        <EventsCard>
          <p>{name}</p>
          <p>{date}</p>
          <p>{time}</p>
          <p>{body}</p>
        </EventsCard>
      </React.Fragment>

     );
  }
}

export default StudentEvent;
