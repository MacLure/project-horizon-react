import React, { Component } from 'react';
import styled from 'styled-components';

const InfoCard = styled.div`
  background-color: #2A2C33;
  margin: 20px 10px;
  width: 500px;
  height: 150px;
  border-radius: 2px;
  grid-column-start: 1;
  gird-row-start: 1;
`

// INCLUDES COHORT DETAILS/S

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
