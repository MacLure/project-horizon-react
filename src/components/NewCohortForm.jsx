import React, { Component } from 'react';

class NewCohortForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    name: '',
    course_type: '',
    start_date: '',
    end_date: '',
   }

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('new cohort submitted: ' + this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form className="container_large" onSubmit={this.handleSubmit}>
          <h2>New Cohort</h2>
<<<<<<< HEAD
<<<<<<< HEAD
          <label htmlFor="name" placeholder="bb8">Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} ></input>

          <label htmlFor="course_type">Course Type</label>
          <select name="course_type" value={this.state.course_type} onChange={this.handleChange} >
=======
=======
>>>>>>> react_styles
          <label htmlfor="name" placeholder="bb8">Name</label>
          <input type="text" name="name"></input>

          <label htmlfor="course_type">Course Type</label>
          <select name="course_type">
>>>>>>> react_styles
            <option value="wdi">Web Development </option>
            <option value="uxdi">User Expierence</option>
            <option value="dsi">Data Science</option>
          </select>

<<<<<<< HEAD
<<<<<<< HEAD
          <label htmlFor="start_date">Start Date</label>
          <input type="date" name="start_date" value={this.state.start_date} onChange={this.handleChange} ></input>

          <label htmlFor="end_date">End Date</label>
          <input type="date" name="end_date" value={this.state.end_date} onChange={this.handleChange} ></input>
=======
=======
>>>>>>> react_styles
          <label htmlfor="start_date">Start Date</label>
          <input type="date" name="start_date"></input>

          <label htmlfor="end_date">End Date</label>
          <input type="date" name="end_date"></input>
>>>>>>> react_styles

          <br/><button type="submit" className="submit">Submit</button>

        </form>
      </div>
     );
  }
}

export default NewCohortForm;
