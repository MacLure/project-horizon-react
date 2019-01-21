import React, { Component } from 'react';

class NewStudentForm extends Component {
  state = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    cohort_id: '',
    image_url: ''
   }

  render() {
    return (
      <div className="hello"> 
      New Student
        <form>
          <label for="first_name">First Name</label>
          <input type="text" name="first_name"></input>

          <label for="last_name">Last Name</label>
          <input type="text" name="last_name"></input>

          <label for="phone">Phone Number</label>
          <input type="text" name="phone"></input>

          <label for="email">Email</label>
          <input type="text" name="email"></input>

          <label for="cohort_id">Cohort</label>
          <input type="text" name="cohort_id"></input>

          <label for="image_url">Image URL</label>
          <input type="text" name="image_url"></input>
        </form>
      </div>
     );
  }
}

export default NewStudentForm;
