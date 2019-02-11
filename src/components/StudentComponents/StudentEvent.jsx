import React, { Component } from 'react';
import styled from 'styled-components';

const EventsCard = styled.div`
  background-color: #3f4147;
  margin: 0 auto;
  width: 80%;
  height: 150px;
  border-radius: 2px;
  /* grid-column-start: 1;
  gird-row-start: 2; */
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
