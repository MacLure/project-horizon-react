import React, { Component } from 'react';
import NewStudentForm from './NewStudentForm'
import NewAdminForm from './NewAdminForm'
import NewEventForm from './NewEventForm'
import NewAssignmentForm from './NewAssignmentForm'
import edit from '../../assets/Icons/edit.svg';
import trash from '../../assets/Icons/trash.svg';
import plus from '../../assets/Icons/plusSmall.svg';
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
      assignments: props.cohortAssignments,
      submissions: props.submissions,
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

    const options = {year: 'numeric', month: 'short', day: 'numeric' };
    const formattedAssignmentDate = (date) => new Date(Date.parse(date)).toLocaleString('en', this.options)
    const formattedEventDate = (date) => new Date(Date.parse(date)).toLocaleString('en', this.options)
    const EventHour = (event) => new Date(Date.parse(event.time)).getHours()
    const EventMinute = (event) => new Date(Date.parse(event.time)).getMinutes()

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

    const getStudentProgressPercent = (student) => {
      console.log(this.state.assignments.length)
      return this.state.submissions.filter(submission => submission.student_id === student.id).length <= 0 ?
      0 :
      Math.round(this.state.submissions.filter(submission => submission.student_id === student.id).length / this.state.assignments.length * 100)
    }

    const getStudentProgressColor = (percent) => {
      if (percent < 60) return "#FC3404"
      if (percent >= 60 && percent < 80) return "#C5A022"
      if (percent >= 80) return "#17B57E"
    }

  if(this.props.cohortStudents){
    this.cStudents = this.props.cohortStudents.map(student => (
      <li className="detailsListItem" key={student.id} >
        <div className="adminStudentName">
          {student.first_name} {student.last_name}
          <div className="studentProgressPercent" style={{backgroundColor: getStudentProgressColor(getStudentProgressPercent(student))}}>
            {getStudentProgressPercent(student)}%
          </div>
        </div>
      </li>
    ))
  }

  if(this.props.cohortEvents){
    this.cEvents = this.props.cohortEvents.map(event => (
      <li className="detailsListItem" key={event.id} onClick={e=>{this.props.TriggerEventDetails(event)}} >
        <div>{event.event_type}:<br/> {event.name}</div>
        <div className="eventAssignmentDates">{formattedEventDate(event.date)} @ {EventHour(event)}:{EventMinute(event)}</div>
      </li>
    ))
  }

  if(this.props.cohortAssignments){
    this.cAssignments = this.props.cohortAssignments.map(assignment => (
      <li className="detailsListItem" key={assignment.id} onClick={e=>{this.props.TriggerAssignmentDetails(assignment)}} >
        <div>{assignment.name}</div>
        <div className="eventAssignmentDates">{formattedAssignmentDate(assignment.due_date)}</div>
      </li>
    ))
  }

  const getCohortType = (str) => {
    if (str === "wdi") {return "Web Development"}
    if (str === "uxdi") {return "UX Design"}
    if (str === "dsi") {return "Data Science"}

  }

  return (
    <div className="cohortDetailsSection">
      <div className="header">
        <h2 className="detailsTitle">{getCohortType(this.props.onFocusData!=null?this.props.onFocusData.course_type:null)} | {this.props.onFocusData!=null?this.props.onFocusData.name:null}</h2>
        <div className="dates">{this.props.onFocusData!=null?this.formattedStartDate:null} - {this.props.onFocusData!=null?this.formattedEndDate:null}</div>
        <div className="editCohortButton" onClick={e=>{this.props.TriggerEditCohortForm(e)}} ><img className="editIcon" src={edit}/></div>
        <div className="adminDeleteButton" onClick={e=>{this.handleDelete(e)}}><img className="deleteIcon" src={trash}/></div>
      </div>
      <div className="hr"></div>
      <div className="cohortDetailsGrid">
        <div className="students">
          <h2 className="sectionTitle">Students</h2>
            <div className="addButton" onClick={e=>{this.props.TriggerNewStudentForm(e)}}><img className="addIcon" src={plus}/></div>
          <div>
            {this.cStudents}
          </div>
        </div>
        <div className="assignments">
          <h2 className="sectionTitle">Assignments</h2>
            <div className="addButton" onClick={e=>{this.props.TriggerNewAssignmentForm(e)}}><img className="addIcon" src={plus}/></div>
            <div>{this.cAssignments}</div>
        </div>
        <div className="events">
          <h2 className="sectionTitle">Events</h2>
            <div className="addButton" onClick={e=>{this.props.TriggerNewEventForm(e)}}><img className="addIcon" src={plus}/></div>
          <ul>
            {this.cEvents}
          </ul>
        </div>
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
)(CohortDetails);
