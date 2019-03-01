import React, { Component } from 'react';
import  {deleteEvent} from '.././../service';
import  {editEvent} from '../../service';
import { connect } from 'react-redux';
import AdminStyles from './../../Admin.css';
import X from '../../assets/Icons/x.svg';

class AdminEventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      event: this.props.event,
    }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.EditButtonClass = this.EditButtonClass.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

  options = {year: 'numeric', month: 'short', day: 'numeric' };
  formattedDate = new Date(Date.parse(this.props.event.date)).toLocaleString('en', this.options)
  hour = new Date(Date.parse(this.props.event.time)).getHours()
  minute = new Date(Date.parse(this.props.event.time)).getMinutes()

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = this.state
    let eventId = this.props.event.id
    editEvent(eventId, data, this.props.token)
    .then(e=>e.json())
    .then(e=>this.props.eventSuccess())
    .then(this.toggleEdit())
  }

  toggleEdit = () => {
    this.setState( this.state.editing ? {editing:false} : {editing:true} )
  }

  EditButtonClass = () => this.state.editing ? "whiteButton" : "addButton";

  handleDelete = (e) => {
    e.preventDefault();
    let event_id = this.props.event.id
    deleteEvent(event_id, this.props.token)
    .then(e=>this.props.deleteSuccess())
    .then(this.props.escapeEventDetailsModal)
  }


  detailsOrForm = () => {
    return !this.state.editing ?
      <div>
        <h2 className="eventsTitle">{this.state.event.name}</h2>
        <p>{this.formattedDate} @ {this.hour}:{this.minute}</p>
        <p>{this.state.event.body}</p>
        <button className="deleteButton" onClick={e=>{this.handleDelete(e)}}>Delete Event</button>
      </div>
      :
      <form onSubmit={this.handleSubmit}>
        <h2 className="formTitle">Edit Event</h2>
        <div className="one">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={this.state.event.name} onChange={this.handleChange} ></input>
        </div>
        <div className="two">
          <label htmlFor="date">Date</label>
          <input type="date" name="date" value={this.state.event.date} onChange={this.handleChange} ></input>
          <label htmlFor="time">Time</label>
          <input type="time" name="time" value={this.state.event.time} onChange={this.handleChange} ></input>

        </div>
        <div className="three">
          <label htmlFor="body">Details</label>
          <textArea name="body" value={this.state.event.body} onChange={this.handleChange} ></textArea>
        </div>
        <button className="submitButton" type="submit">Submit</button>

      </form>
  }

 render() {
   return (
     <React.Fragment>
      <div className="modal">
        <div className="eventsContainer">
          <div className="modalEscape"  onClick={this.props.escapeEventDetailsModal}><img className="escapeIcon" src={X}/></div>
          {this.detailsOrForm()}
          <button className={this.EditButtonClass()} onClick={e=>{this.toggleEdit()}} >{this.state.editing ? "Cancel" : "Edit Event"}</button>
        </div>
      </div>

     </React.Fragment>
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
)(AdminEventDetails);
