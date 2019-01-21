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
      <div>
        <form method="post" className="container_large">
        <h2>New Student</h2>
          <label for="first_name">First Name</label>
          <input type="text" name="first_name"></input>

          <label for="last_name">Last Name</label>
          <input type="text" name="last_name"></input>

          <label for="phone">Phone Number</label>
          <input type="tel" name="phone"></input>

          <label for="email">Email</label>
          <input type="text" name="email"></input>

          <br/><button type="submit" className="submit">Submit</button>
        </form>
      </div>
     );
  }
}

export default NewStudentForm;
