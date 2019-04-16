import React, { Component } from 'react';
import AdminStyles from './../../Admin.css';
import X from '../../assets/Icons/x.svg';

class NewAdminForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
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
    this.setState({[event.target.name]: event.target.value.toLowerCase()});
  }

  handleSubmit(event) {
    event.preventDefault();
      // fetch('http://localhost:3000/api/admin/cohorts', {
      let data = this.state
      console.log(data);
        fetch(`https://project-horizon-rails.herokuapp.com/api/admin/students?student=${JSON.stringify(data)}`, {
        method: 'post',
        mode: "cors"
      }).then(response => {console.log(this.state)})
      .then(this.props.escapeNewAdminModal)
  }

 render() {
   return (
     <div className="modal">
       <div className="modalContainer">
       <div className="modalEscape"  onClick={this.props.escapeNewAdminModal}><img className="escapeIcon" src={X} alt="exit" /></div>
        <h2 className="formTitle">Add Admin</h2>
        <form method="post" onSubmit={this.handleSubmit}>
          <div className="one">
            <label htmlFor="first_name">First Name</label>
            <input type="text" name="first_name" placeholder="John"  value={this.state.first_name} onChange={this.handleChange}></input>
          </div>
          <div className="two">
            <label htmlFor="last_name">Last Name</label>
            <input type="text" name="last_name" placeholder="Smith"  value={this.state.last_name} onChange={this.handleChange}></input>
          </div>
          <div className="three">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" name="phone" placeholder="555-555-5555"  value={this.state.phone} onChange={this.handleChange}></input>
          </div>
          <div className="four">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="hello@mail.com" value={this.state.email} onChange={this.handleChange}></input>
          </div>
         <br/><button className="submitButton" type="submit">Submit</button>
       </form>
      </div>
      </div>
    );
 }
}

export default NewAdminForm;
