import React, { Component } from 'react';
import styled from 'styled-components';


class NewAssignmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      due_date: '',
      cohort: '',
      body: ''
   }
   this.handleChange = this.handleChange.bind(this);
  }

   handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = () =>{
    console.log('On Submit')
  }

  render() {
    return (
      <React.Fragment>
      <div>
        <h1>Create Assignment</h1>

          <div>
            <label htmlFor="name">Assignment Name</label>
            <input type="text" name="name" placeholder="Personal Branding"  value={this.state.name} onChange={this.handleChange}></input>
          </div>
          <div>
          <label htmlFor="due_date">Due Date</label>
          <input type="date" name="due_date" value={this.state.due_date} onChange={this.handleChange} ></input>
        </div>
          <div>
            <label htmlFor="body">Assignment Body</label>
            <textarea row="100" name="body" placeholder="body" value={this.state.body} onChange={this.handleChange}></textarea>
          </div>
         <br/><button type="submit" onClick={e=>{
           e.preventDefault();
           this.handleSubmit()
         }}>Submit</button>

      </div>
     </React.Fragment>
     );
  }
}

export default NewAssignmentForm;
