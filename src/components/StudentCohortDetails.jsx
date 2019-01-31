import React, { Component } from 'react';
import styled from 'styled-components';

const InfoCard = styled.div`
  background-color: red;
  margin: 20px 10px;
  width: 40vw;
  border-radius: 2px;
  grid-column-start: 2;
  gird-row-start: 1;
`

class StudentCohortDetails extends Component {
  state = {  }
  render() {

    const { name, course_type, end_date, start_date } = this.props

    return (
      <React.Fragment>
        <InfoCard>
          <p>{name}</p>
          <p>{course_type}</p>
          <p>{start_date}</p>
          <p>{end_date}</p>
        </InfoCard>

      </React.Fragment>

     );
  }
}

export default StudentCohortDetails;

 // Name, course_type, start/end date, students, staff,
