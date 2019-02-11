import React, { Component } from 'react';
import styled from 'styled-components';

class StudentAssignment extends Component {
  state = {  }


  render() {
    const { name, body, dueDate, data, onAssignmentClick } = this.props

    return (
      <div style={{textAlign:'center'}}
        onClick={e=>{onAssignmentClick(data)}}
      >
        <p>{name}</p>
        <p>{body}</p>
        <p>{dueDate}</p>
      </div>
     );
  }
}

export default StudentAssignment;
