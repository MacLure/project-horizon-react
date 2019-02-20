import React, { Component } from 'react';
import  {deleteAssignment} from '../../service';

import { connect } from 'react-redux';
import AdminStyles from './../../Admin.css'

class AdminAssignmentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      assignment: this.props.assignment,
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  options = {year: 'numeric', month: 'short', day: 'numeric' };
  formattedDate = new Date(Date.parse(this.props.assignment.due_date)).toLocaleString('en', this.options)


  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleDelete = (e) => {
    e.preventDefault();
    let assignment_id = this.props.assignment.id
    deleteAssignment(assignment_id, this.props.token)
    .then(e=>this.props.deleteSuccess())
    .then(this.props.escapeAssignmentDetailsModal)
  }

    toggleEdit = () => {
      this.setState( this.state.editing ? {editing:false} : {editing:true} )
    }

    due_date = () => {
      return !this.state.editing ?
        this.formattedDate :
        <input type="date" name="due_date" value={this.state.assignment.due_date} onChange={this.handleChange} ></input>
    }

    body = () => {
      return !this.state.editing ?
        this.state.assignment.body :
        <div><p>body:</p><input type="textArea" name="body" value={this.state.assignment.body} onChange={this.handleChange} ></input></div>
    }
    
    name = () => {
      return !this.state.editing ?
        <h2 className="eventsTitle">{this.state.assignment.name}</h2> :
        <div><p>name:</p><input type="text" name="name" value={this.state.assignment.name} onChange={this.handleChange} ></input></div>
    }



 render() {
   return (
     <React.Fragment>
     <div className="modal">
     <div className="eventsContainer">
      <div className="modalEscape"  onClick={this.props.escapeAssignmentDetailsModal}>×</div>

      <div>{this.name()}</div>
      <div>Due: {this.due_date()}</div>
      <div>{this.body()}</div>

      <button className="deleteButton" onClick={e=>{this.handleDelete(e)}} >Delete Assignment</button>
      <button onClick={e=>{this.toggleEdit()}} >{this.state.editing? "Cancel" : "Edit Assignment"}</button>

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
)(AdminAssignmentDetails);
