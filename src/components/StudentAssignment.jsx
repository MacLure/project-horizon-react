import React, { Component } from 'react';
import styled from 'styled-components';

class StudentAssignment extends Component {
  state = {  }


  render() {
    const { name, body, dueDate } = this.props

    return (
      <div style={{textAlign:'center'}}>
        <p>{name}</p>
        <p>{body}</p>
        <p>{dueDate}</p>

      </div>
     );
  }
}

export default StudentAssignment;
