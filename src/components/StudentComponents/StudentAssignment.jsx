import React, { Component } from 'react';
import styled from 'styled-components';

class StudentAssignment extends Component {
  state = {  }



  options = {year: 'numeric', month: 'short', day: 'numeric' };

   assignmentSubmitted = () => {return (this.props.submission)}
   assignmentOverDue = () => {return (!this.props.submission && (Date.now() - Date.parse(this.propsdue_date) > 0))}

    submissionStatus = () => {
      if (this.assignmentSubmitted()) {
        return {backgroundColor: 'green'}
      } else if (this.assignmentOverDue()) {
        return {backgroundColor: 'red'}
      }
    }
  

  render() {
    const { name, body, dueDate, data, onAssignmentClick } = this.props

    return (
      <div className="assignmentItem" style={this.submissionStatus()}
        onClick={e=>{onAssignmentClick(data)}}
      >
        <p>{name}</p>
        <p>Due: {new Date(Date.parse(dueDate)).toLocaleString('en', this.options)}</p>
      </div>
     );
  }
}

export default StudentAssignment;
