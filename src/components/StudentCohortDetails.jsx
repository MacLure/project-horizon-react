import React, { Component } from 'react';

class StudentCohortDetails extends Component {
  state = {  }
  render() { 

    const { name, course_type, end_date, start_date } = this.props

    return ( 
      <div style={{textAlign:'center'}}>
      <p>{name}</p>
      <p>{course_type}</p>
      <p>{start_date}</p>
      <p>{end_date}</p>

    </div>

     );
  }
}
 
export default StudentCohortDetails;