import React, { Component } from 'react';

class NewStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    cohort_id: '',
    image_url: ''
   }

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('new student submitted: ' + this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form method="post" className="container_large" onSubmit={this.handleSubmit}>
        <h2>New Student</h2>
<<<<<<< HEAD
<<<<<<< HEAD
          <label htmlFor="first_name">First Name</label>
          <input type="text" name="first_name"  value={this.state.first_name} onChange={this.handleChange}></input>

          <label htmlFor="last_name">Last Name</label>
          <input type="text" name="last_name"  value={this.state.last_name} onChange={this.handleChange}></input>

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" value={this.state.phone} onChange={this.handleChange}></input>

          <label htmlFor="email">Email</label>
          <input type="text" name="email"  value={this.state.email} onChange={this.handleChange}></input>
=======
=======
>>>>>>> react_styles
          <label htmlfor="first_name">First Name</label>
          <input type="text" name="first_name"></input>

          <label htmlfor="last_name">Last Name</label>
          <input type="text" name="last_name"></input>

          <label htmlfor="phone">Phone Number</label>
          <input type="tel" name="phone"></input>

          <label htmlfor="email">Email</label>
          <input type="text" name="email"></input>
>>>>>>> react_styles

          <br/><button type="submit" className="submit">Submit</button>
        </form>
      </div>
     );
  }
}

export default NewStudentForm;
