import React, { Component } from 'react';

class NewCohortForm extends Component {
  state = {
    name: '',
    course_type: '',
    start_date: '',
    end_date: '',
   }

  render() {
    return (
      <div>
        <form className="container_large">
          <h2>New Cohort</h2>
          <label htmlfor="name" placeholder="bb8">Name</label>
          <input type="text" name="name"></input>

          <label htmlfor="course_type">Course Type</label>
          <select name="course_type">
            <option value="wdi">Web Development </option>
            <option value="uxdi">User Expierence</option>
            <option value="dsi">Data Science</option>
          </select>

          <label htmlfor="start_date">Start Date</label>
          <input type="date" name="start_date"></input>

          <label htmlfor="end_date">End Date</label>
          <input type="date" name="end_date"></input>

          <br/><button type="submit" className="submit">Submit</button>

        </form>
      </div>
     );
  }
}

export default NewCohortForm;
