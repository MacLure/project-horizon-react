import React, { Component } from 'react';
import StudentStyles from './../../Student.css'
import { connect } from 'react-redux';

class StudentEventDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      event: this.props.event,
    }
  }


  options = {year: 'numeric', month: 'short', day: 'numeric' };


  render() {
    const hour = new Date(Date.parse(this.props.event.time)).getHours()
    const minute = new Date(Date.parse(this.props.event.time)).getMinutes()

    return (
      <div>
        <h2 className="AssignmentTitle">{this.props.event.event_type}: {this.props.event.name}</h2>
        <div className="date">{new Date(Date.parse(this.props.event.date)).toLocaleString('en', this.options)} @ {hour}:{minute}</div>
        <div className="date">{this.props.event.location}</div>

        <div>{this.props.event.body}</div>
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
)(StudentEventDetails);
