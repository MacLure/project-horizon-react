import React, { Component } from 'react';
import styled from 'styled-components';

class StudentEvent extends Component {
  state = {  }

  options = {year: 'numeric', month: 'short', day: 'numeric' };

  render() {

    return (
      <div className="assignmentItem" onClick={e=>{this.props.onEventClick(this.props.data)}}>
        <div className="assignmentItemDetails">
          <div>{this.props.data.event_type}: {this.props.data.name}</div>
          <div className="date">{new Date(Date.parse(this.props.data.date)).toLocaleString('en', this.options)}</div>
        </div>
      </div>
     );
  }
}

export default StudentEvent;
