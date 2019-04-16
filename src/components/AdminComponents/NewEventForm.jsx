import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {createNewEvent} from './../../service';
import AdminStyles from './../../Admin.css';
import X from '../../assets/Icons/x.svg';

class NewEventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cohort_id: this.props.cohortId,
      name: '',
      company_id: '',
      contact_id: '',
      date: '',
      time: '',
      body: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }


  handleSubmit = (e) =>{
    e.preventDefault();
    let data = this.state
    createNewEvent(data, this.props.token)
    .then(e=>e.json())
    .then(e=>this.props.eventSuccess())
    .then(this.props.escapeNewEventModal)

  }


 render() {
   return (
     <div className="modal">
       <div className="modalContainer">
       <div className="modalEscape"  onClick={this.props.escapeNewEventModal}><img className="escapeIcon" src={X} alt="exit" /></div>
        <h2 className="formTitle">Add Event</h2>
        <form method="post" onSubmit={this.handleSubmit}>
          <div className="one">
            <label htmlFor="first_name">Name</label>
            <input type="text" name="name" placeholder="Event Name"  value={this.state.name} onChange={this.handleChange}></input>
          </div>
          <div className="three">
            <label htmlFor="last_name">date</label>
            <input type="date" name="date" placeholder="Date"  value={this.state.date} onChange={this.handleChange}></input>
          </div>
          <div className="four">
            <label htmlFor="phone">time</label>
            <input type="time" name="time" placeholder="Time"  value={this.state.time} onChange={this.handleChange}></input>
          </div>
          <div className="eventTextarea">
            <label htmlFor="email">body</label>
            <textarea rows="3" cols="32" type="textArea" name="body" placeholder="Details" value={this.state.body} onChange={this.handleChange}></textarea>
          </div>
         <br/><button className="eventSubmitButton" type="submit">Submit</button>
       </form>
      </div>
      </div>
    );
 }
}

const mapStatetoProps = state => {
  return {
    token: state.token,
    isAuthenticated: state.isAuthenticated,
    isAuthenticating: state.isAuthenticating,
    currentUser: state.currentUser,
    errors: state.errors
  }
}

const mapDispatchtoProps = dispatch => {
  return  {
    onTokenReceive: token => dispatch({ type: "SET_USER_TOKEN", payload: token})
  }
}

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(NewEventForm);
