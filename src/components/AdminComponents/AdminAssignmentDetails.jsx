import React, { Component } from 'react';
import  {deleteAssignment} from '../../service';

import { connect } from 'react-redux';
import AdminStyles from './../../Admin.css'

class AdminAssignmentDetails extends Component {
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
  formattedDate = new Date(Date.parse(this.props.assignment.due_date)).toLocaleString('en', this.options)


  handleDelete = (e) => {
    e.preventDefault();
    let assignment_id = this.props.assignment.id
    deleteAssignment(assignment_id, this.props.token)
    .then(e=>this.props.deleteSuccess())
    .then(this.props.escapeAssignmentDetailsModal)

  }

 render() {
   return (
     <React.Fragment>
     <div className="modal">
     <div className="eventsContainer">
      <div className="modalEscape"  onClick={this.props.escapeAssignmentDetailsModal}>×</div>

      <h2 className="eventsTitle">{this.props.assignment.name}</h2>
      <p>Due: {this.formattedDate}</p>
      <p>{this.props.assignment.body}</p>

      <button className="deleteButton" onClick={e=>{this.handleDelete(e)}} >Delete Assignment</button>
      <button onClick={e=>{this.showEdit(e)}} >Edit Assignment</button>

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
