import React, { Component } from 'react';
import styled from 'styled-components';

class StudentAssignment extends Component {
  state = {  }



  options = {year: 'numeric', month: 'short', day: 'numeric' };

  
  

  render() {
    const { name, body, dueDate, data, onAssignmentClick } = this.props

    return (
      <div className="assignmentItem" style={{textAlign:'center'}}
        onClick={e=>{onAssignmentClick(data)}}
      >
        <p>{name}</p>
        <p>Due: {new Date(Date.parse(dueDate)).toLocaleString('en', this.options)}</p>
      </div>
     );
  }
}

export default StudentAssignment;
