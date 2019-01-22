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
          <label for="name" placeholder="bb8">Name</label>
          <input type="text" name="name"></input>

          <label for="course_type">Course Type</label>
          <select name="course_type">
            <option value="1">Web Development </option>
            <option value="2">User Expierence</option>
            <option value="3">Data Science</option>
          </select>

          <label for="start_date">Start Date</label>
          <input type="date" name="start_date"></input>

          <label for="end_date">End Date</label>
          <input type="date" name="end_date"></input>

          <br/><button type="submit" className="submit">Submit</button>

        </form>
      </div>
     );
  }
}

export default NewCohortForm;
