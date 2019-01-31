import React, { Component } from 'react';

class StudentEvent extends Component {
  state = {  }


  render() { 
    const { name, body, date, time } = this.props

    return ( 
      <div style={{textAlign:'center'}}>
        <p>{name}</p>
        <p>{date}</p>
        <p>{time}</p>
        <p>{body}</p>

      </div>
     );
  }
}
 
export default StudentEvent;