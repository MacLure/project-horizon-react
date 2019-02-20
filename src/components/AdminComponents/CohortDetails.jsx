import React, { Component } from 'react';
import NewStudentForm from './NewStudentForm'
import NewAdminForm from './NewAdminForm'
import NewEventForm from './NewEventForm'
import NewAssignmentForm from './NewAssignmentForm'

import { connect } from 'react-redux';
import { deleteCohort } from '.././../service';
import AdminStyles from './../../Admin.css';

class CohortDetails extends Component {
  constructor(props) {
    super(props)

    this.state ={
      showNewStudentForm: false,
      showNewAdminForm: false,
      showNewEventForm: false,
      showNewAssignmentForm: false,
      students: props.students,
      admins: props.admins,
      assignments: props.assignments,
      events: props.events,
      selectedEvent: null,
    }

    // this.handleShowNewStudentForm = this.handleShowNewStudentForm.bind(this);
    this.handleshowNewAdminForm = this.handleshowNewAdminForm.bind(this);
    this.handleshowNewEventForm = this.handleshowNewEventForm.bind(this);
    // this.showEditCohortForm = this.showEditCohortForm.bind(this);

    // this.handleshowNewAssignmentForm = this.handleshowNewAssignmentForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.reload = this.reload.bind(this);
  }

//  if(props.onFocusData != null){
//   const {start_date, end_date, name, course_type} = props.onFocusData;
//  }

  students = this.props.students
  cStudents = 'Loading...';
  cEvents = 'Loading...';
  cAssignments = 'Loading...';

  options = {year: 'numeric', month: 'short', day: 'numeric' };
  formattedStartDate = new Date(Date.parse(this.props.onFocusData.start_date)).toLocaleString('en', this.options)
  formattedEndDate = new Date(Date.parse(this.props.onFocusData.end_date)).toLocaleString('en', this.options)


  handleShowNewStudentForm = () =>{
    this.setState({showNewStudentForm: !this.state.showNewStudentForm})
  }

  handleshowNewAdminForm = () =>{
    this.setState({showNewAdminForm: !this.state.showNewAdminForm})
  }

  handleshowNewEventForm = () =>{
    this.setState({showNewEventForm: !this.state.showNewEventForm})
  }

  // handleshowNewAssignmentForm = () =>{
  //   this.setState({showNewAssignmentForm: !this.state.showNewAssignmentForm})
  // }

  handleDelete = (e) => {
    e.preventDefault();
    let cohortId = this.props.onFocusData.id
    deleteCohort(cohortId, this.props.token)
    .then(e=>this.props.deleteSuccess())
  }

  handleEventClick = (e) => {
    this.setState({
      selectedEvent: e
    })
  }

  reload = () =>{
    this.setState(this.state)
  }

  render() {

    const showNewStudentForm = () => {
      if (this.state.showNewStudentForm ) {
        return (
          <NewStudentForm cohortId = {this.props.onFocusData.id} />
        )
      }
    }

    const handleshowNewAdminForm = () => {
      if (this.state.showNewAdminForm ) {
        return (
          <NewAdminForm />
        )
      }
    }

    const handleshowNewEventForm = () => {
      if (this.state.showNewEventForm ) {
        return (
          <NewEventForm cohortId = {this.props.onFocusData.id} />
        )
      }
    }

    const handleshowNewAssignmentForm = () => {
      if (this.state.showNewAssignmentForm ) {
        return (
          <NewAssignmentForm
            cohortId = {this.props.onFocusData.id}
            assignmentSuccess = {this.reload}
          />
        )
      }
    }



  if(this.props.cohortStudents){
    this.cStudents = this.props.cohortStudents.map(student => (
      <li className="detailsListItem" key={student.id} >{student.first_name} {student.last_name}</li>
    ))
  }

  if(this.props.cohortEvents){
    this.cEvents = this.props.cohortEvents.map(event => (
      <li className="detailsListItem" key={event.id} onClick={e=>{this.props.TriggerEventDetails(event)}} >{event.name}</li>
    ))
  }

  if(this.props.cohortAssignments){
    this.cAssignments = this.props.cohortAssignments.map(assignment => (
      <li className="detailsListItem" key={assignment.id} onClick={e=>{this.props.TriggerAssignmentDetails(assignment)}} >{assignment.name}</li>
    ))
  }


// rename CohortCard here (but not the actual component)
  return (
    <React.Fragment>
      <div className="cohortCard">
        <h2 className="detailsTitle">{this.props.onFocusData!=null?this.props.onFocusData.name:null}</h2>
        <p className="dates">{this.props.onFocusData!=null?this.formattedStartDate:null} - {this.props.onFocusData!=null?this.formattedEndDate:null}</p><br/>
        <button className="deleteButton" onClick={e=>{this.props.TriggerEditCohortForm(e)}} >Edit Cohort</button>
        <div className="hr"></div>
        <div className="cohortDetailsGrid">
          <div className="students">
            <h2 className="sectionTitle">Students:</h2>
            <li className="detailsListItem">
              {this.cStudents}
            </li>
            <button className="blueButton" onClick={e=>{this.props.TriggerNewStudentForm(e)}} >new student</button>
          </div>
          <div className="Admin">
            <h2 className="sectionTitle">Staff:</h2>
            <ul>
              <li className="detailsListItem">Natalie</li>
              <li className="detailsListItem">Daniel</li>
              <li className="detailsListItem">Fred</li>
              <li className="detailsListItem">Saree</li>
              <li className="detailsListItem">Elvis</li>
            </ul>
            <button className="blueButton" onClick={e=>{this.props.TriggerNewAdminForm(e)}}>new admin</button>
          </div>
          <div className="assignments">
            <h2 className="sectionTitle">Assignments:</h2>
            <ul>
              <li className="detailsListItem">{this.cAssignments}</li>
            </ul>
            <button className="blueButton" onClick={e=>{this.props.TriggerNewAssignmentForm(e)}} >new assignment</button>
          </div>
          <div className="events">
            <h2 className="sectionTitle">Events:</h2>
            <ul>
              {this.cEvents}
            </ul>
            <button className="blueButton" onClick={e=>{this.props.TriggerNewEventForm(e)}} >new event</button>
          </div>
        </div>
        <button className="deleteButton" onClick={e=>{this.handleDelete(e)}} >Delete Cohort</button>
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
)(CohortDetails);
