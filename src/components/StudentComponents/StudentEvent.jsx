import React, { Component } from 'react';
import StudentStyles from './../../Student.css'

class StudentEvent extends Component {
  state = {  }

  options = {year: 'numeric', month: 'short', day: 'numeric' };
  formattedDate = new Date(Date.parse(this.props.event.date)).toLocaleString('en', this.options)
  hour = new Date(Date.parse(this.props.event.time)).getHours()
  minute = new Date(Date.parse(this.props.event.time)).getMinutes()


  render() {
    const { name, body, date, time } = this.props

    return (
      <React.Fragment>
        <div className="eventCard">
          <p>{name}</p>
          <p>{this.formattedDate}</p>
          <p>{time}</p>
          <p>{body}</p>
        </div>
      </React.Fragment>

     );
  }
}

export default StudentEvent;
