import React, { Component } from 'react';
import  {deleteEvent} from '.././../service';
import { connect } from 'react-redux';
import AdminStyles from './../../Admin.css'

class AdminEventDetails extends Component {
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

    this.handleDelete = this.handleDelete.bind(this);

  }

  options = {year: 'numeric', month: 'short', day: 'numeric' };
  formattedDate = new Date(Date.parse(this.props.event.date)).toLocaleString('en', this.options)
  hour = new Date(Date.parse(this.props.event.time)).getHours()
  minute = new Date(Date.parse(this.props.event.time)).getMinutes()


  handleDelete = (e) => {
    e.preventDefault();
    let event_id = this.props.event.id
    deleteEvent(event_id, this.props.token)
    .then(e=>this.props.deleteSuccess())
    .then(this.props.escapeEventDetailsModal)

  }

 render() {
   return (
     <React.Fragment>
     <div className="modal">
     <div className="eventsContainer">
      <div className="modalEscape"  onClick={this.props.escapeEventDetailsModal}>×</div>
        <h2 className="eventsTitle">{this.props.event.name}</h2>
        <p>{this.formattedDate} @ {this.hour}:{this.minute}</p>
        <p>{this.props.event.body}</p>
        <button onClick={e=>{this.handleDelete(e)}} >Delete Cohort</button>

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
