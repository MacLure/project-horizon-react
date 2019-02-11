import React, { Component } from 'react';
import StudentStyles from './../../Student.css'

class StudentEvent extends Component {
  state = {  }


  render() {
    const { name, body, date, time } = this.props

    return (
      <React.Fragment>
        <div className="eventCard">
          <p>{name}</p>
          <p>{date}</p>
          <p>{time}</p>
          <p>{body}</p>
        </div>
      </React.Fragment>

     );
  }
}

export default StudentEvent;
