import React, { Component } from 'react';
import styled from 'styled-components';
import checkmark from './../../assets/Icons/tick.svg'
import exclamation from './../../assets/Icons/warning.svg'


class StudentEvent extends Component {
  state = {  }



  options = {year: 'numeric', month: 'short', day: 'numeric' };

  assignmentSubmitted = () => {return (this.props.submission)}
  assignmentOverDue = () => {return (!this.props.submission && (Date.now() - Date.parse(this.propsdue_date) > 0))}

    submissionStatus = () => {
      if (this.assignmentSubmitted()) {
        return '#17B57E'
      } else if (this.assignmentOverDue()) {
        return '#FC3404'
      }
    }

  render() {


    return (
      <div className="assignmentItem" onClick={e=>{this.props.onEventClick(this.props.data)}}>
        <div className="assignmentItemDetails">
          <div>{this.props.data.event_type}: {this.props.data.name}</div>
          <div className="date">Due: {new Date(Date.parse(this.props.data.date)).toLocaleString('en', this.options)}</div>
        </div>
      </div>
     );
  }
}

export default StudentEvent;
