import React, { Component } from 'react';
import CohortCard from './CohortCard';
import CohortDetails from './CohortDetails';
import NewCohortForm from './NewCohortForm';
import Footer from './../CommonComponents/Footer';
import AdminNavBar from './AdminNavBar';
import { connect } from 'react-redux';
import  {getAdminDashboardData} from './../../service';
import NewAssignmentForm from './NewAssignmentForm';
import NewStudentForm from './NewStudentForm';
import NewAdminForm from './NewAdminForm';
import NewEventForm from './NewEventForm';
import AdminEventDetails from './AdminEventDetails'
import AdminAssignmentDetails from './AdminAssignmentDetails';
import EditCohortForm from './EditCohortForm';
import AdminStudentDetails from './AdminStudentDetails';

import plus from './../../assets/Icons/plus.svg'
import AdminStyles from './../../Admin.css'

class AdminDashboard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: null,
      admins: [],
      cohorts: [].filter( cohort => Date.parse(cohort.end_date) > Date.now() ).slice(0, 1),
      students: [],
      student_notes: [],
      assignments: [],
      submissions: [],
      submission_comments: [],
      company_notes: [],
      contact_notes: [],
      events: [],
      onFocusData: null,
      showNewCohortForm: false,
      showNewAssignmentForm: false,
      showNewStudentForm: false,
      showNewAdminForm: false,
      showNewEventForm: false,
      showEventDetails: false,
      showEditCohortForm: false,
      showStudentDetails: false,
      selectedCohort: null,
    }
    this.showNewCohortForm = this.showNewCohortForm.bind(this)
    this.showEditCohortForm = this.showEditCohortForm.bind(this)
    this.showAssignmentDetails = this.showAssignmentDetails.bind(this)
  }

componentDidMount() {
  if(this.props.token != null){
    localStorage.setItem('jwt', JSON.stringify(this.props.token))
    getAdminDashboardData(this.props.token)
    .then(response=>response.json())
    .then(response=> {this.setState({
        id: response.id,
        admins: response.admins,
        cohorts: response.cohorts.filter(cohort => (Date.parse(cohort.end_date) > Date.now())).slice(0, 7),
        students: response.students,
        student_notes: response.student_notes,
        assignments: response.assignments,
        submissions: response.submissions,
        submission_comments: response.submission_comments,
        company_notes: response.company_notes,
        contact_notes: response.contact_notes,
        events: response.events,
        onFocusData: response.cohorts[0]
      });
    })
  }else{
    this.props.history.push('/')
  }
}

    getCohortStudents = (studentArr, cohortId) => {
      let arr = studentArr.filter(student => student.cohort_id === cohortId)
      return arr;
    }

    getCohortEvents = (eventArr, cohortId) => {
      let arr = eventArr.filter(event => event.cohort_id === cohortId)
      return arr;
    }

    getCohortAssignments = (assignmentArr, cohortId) => {
      let arr = assignmentArr.filter(assignment => assignment.cohort_id === cohortId)
      return arr;
    }

    onCohortClick = (data) => {
      console.log('Cohort Data',data)
      this.setState({
        onFocusData:data,
        selectedCohort:this.state.cohorts.indexOf(data)
      })
    }

    destroyToken = () => {
      this.props.onTokenReceive(null)
      this.props.history.push('/')
    }

    TriggerNewCohortForm = () => {this.setState({showNewCohortForm: true})}
    TriggerNewAssignmentForm = () => {this.setState({showNewAssignmentForm: true})}
    TriggerNewStudentForm = () => {this.setState({showNewStudentForm: true})}
    TriggerNewAdminForm = () => {this.setState({showNewAdminForm: true})}
    TriggerNewEventForm = () => {this.setState({showNewEventForm: true})}
    TriggerAssignmentDetails = (assignment) => {this.setState({showAssignmentDetails: assignment})}
    TriggerEventDetails = (event) => {this.setState({showEventDetails: event})}
    TriggerEditCohortForm = (cohort) => {this.setState({showEditCohortForm: cohort})}
    TriggerStudentDetails = (studentId) => {this.setState({showStudentDetails: this.state.students.filter(student => student.id === studentId)[0]})}


    showNewCohortForm = () => {
      if (this.state.showNewCohortForm ) {
        return (
          <NewCohortForm
            cohortId = {this.state.onFocusData.id}
            cohortSuccess = {this.reload}
            escapeNewCohortModal = {this.escapeNewCohortModal}
          />
        )
      }
    }

    showNewAssignmentForm = () => {
      if (this.state.showNewAssignmentForm ) {
        return (
          <NewAssignmentForm
            cohortId = {this.state.onFocusData.id}
            assignmentSuccess = {this.reload}
            escapeNewAssignmentModal = {this.escapeNewAssignmentModal}
          />
        )
      }
    }

    showAssignmentDetails = () => {
      if (this.state.showAssignmentDetails ) {
        return (
          <AdminAssignmentDetails
            assignment = {this.state.showAssignmentDetails}
            assignmentSuccess = {this.reload}
            escapeAssignmentDetailsModal = {this.escapeAssignmentDetailsModal}
            deleteSuccess={this.reload}
            editSuccess={this.reload}
          />
        )
      }
    }

    showNewStudentForm = () => {
      if (this.state.showNewStudentForm ) {
        return (
          <NewStudentForm
            cohortId = {this.state.onFocusData.id}
            studentSuccess = {this.reload}
            escapeNewStudentModal = {this.escapeNewStudentModal}
          />
        )
      }
    }

    showNewAdminForm = () => {
      if (this.state.showNewAdminForm ) {
        return (
          <NewAdminForm
            cohortId = {this.state.onFocusData.id}
            adminSuccess = {this.reload}
            escapeNewAdminModal = {this.escapeNewAdminModal}
          />
        )
      }
    }

    showNewEventForm = () => {
      if (this.state.showNewEventForm ) {
        return (
          <NewEventForm
            cohortId = {this.state.onFocusData.id}
            eventSuccess = {this.reload}
            escapeNewEventModal = {this.escapeNewEventModal}
          />
        )
      }
    }

    showEventDetails = () => {
      if (this.state.showEventDetails ) {
        return (
          <AdminEventDetails
            eventId = {this.state.onFocusData.id}
            eventSuccess = {this.reload}
            escapeEventDetailsModal = {this.escapeEventDetailsModal}
            event = {this.state.showEventDetails}
            deleteSuccess={this.reload}
          />
        )
      }
    }

    showEditCohortForm = () => {
      if (this.state.showEditCohortForm ) {
        return (
          <EditCohortForm
            cohort = {this.state.onFocusData}
            escapeEditCohortModal = {this.escapeEditCohortModal}
          />
        )
      }
    }

    showStudentDetails = () => {
      if (this.state.showStudentDetails ) {
        return (
          <AdminStudentDetails
            student= {this.state.showStudentDetails}
            assignments = {this.state.assignments.filter(assignment => assignment.cohort_id === this.state.showStudentDetails.cohort_id)}
            submissions = {this.state.submissions}
            comments = {this.state.submission_comments}
            updateSuccess = {this.reload}
            escapeStudentDetails = {this.escapeStudentDetails}
          />
        )
      }
    }

    escapeNewEventModal = () => {this.setState({showNewEventForm: false})}
    escapeNewStudentModal = () => {this.setState({showNewStudentForm: false})}
    escapeNewAssignmentModal = () => {this.setState({showNewAssignmentForm: false})}
    escapeAssignmentDetailsModal = () => {this.setState({showAssignmentDetails: false})}
    escapeNewCohortModal = () => {this.setState({showNewCohortForm: false})}
    escapeNewAdminModal = () => {this.setState({showNewAdminForm: false})}
    escapeEventDetailsModal = () => {this.setState({showEventDetails: false})}
    escapeEditCohortModal = () => {this.setState({showEditCohortForm: false})}
    escapeStudentDetails = () => {this.setState({showStudentDetails: false})}

    // displayLogOutButton = () => {
    //   return (this.props.token != null) ?
    //   <button style={{backgroundColor:'red'}} onClick = {e=>{this.destroyToken('')}}>------------------------------------------------------------------Log Out</button> :
    //   ''
    // }

    reload = () =>{
      if(this.props.token != null){
        getAdminDashboardData(this.props.token)
        .then(response=>response.json())
        .then(response=> {this.setState({
          admins: response.admins,
          students: response.students,
          assignments: response.assignments,
          events: response.events,
          onFocusData: response.cohorts[0]
          });
        })
      }else{
        this.props.history.push('/')
      }
    }


  render() {

    let CohortDetail = null;
    if(this.state.onFocusData != null && typeof(this.state.onFocusData) != undefined){
      CohortDetail = <CohortDetails
        onFocusData={this.state.onFocusData}
        students={this.state.students}
        admins={this.state.admins}
        events={this.state.events}
        assignments={this.state.assignments}
        submissions={this.state.submissions}
        cohortStudents={this.getCohortStudents(this.state.students, this.state.onFocusData.id)}
        cohortEvents={this.getCohortEvents(this.state.events, this.state.onFocusData.id)}
        cohortAssignments={this.getCohortAssignments(this.state.assignments, this.state.onFocusData.id)}
        deleteSuccess={this.reload}
        TriggerNewAssignmentForm={this.TriggerNewAssignmentForm}
        TriggerNewStudentForm={this.TriggerNewStudentForm}
        TriggerNewAdminForm={this.TriggerNewAdminForm}
        TriggerNewEventForm={this.TriggerNewEventForm}
        TriggerEventDetails={this.TriggerEventDetails}
        TriggerEditCohortForm={this.TriggerEditCohortForm}
        TriggerAssignmentDetails={this.TriggerAssignmentDetails}
        TriggerStudentDetails={this.TriggerStudentDetails}

      />
    }
    return (
      <React.Fragment>
        <AdminNavBar/>
        <div className="adminGrid">
          <div className="cardContainer">
          {this.state.cohorts
            .map((cohort, index) => (
              <CohortCard
                key={cohort.id}
                data={cohort}
                onCohortClick={this.onCohortClick}
                isActive={this.state.selectedCohort === index}
              />
            )
          )}
          <div className="newCohortButton" onClick={this.TriggerNewCohortForm}>
              <img className="plus" src={plus} alt="new cohort" />
          </div>
          </div>
          <div className="cohortDetailsContainer">
            {CohortDetail}
            {this.showNewAssignmentForm()}
            {this.showAssignmentDetails()}
            {this.showNewStudentForm()}
            {this.showNewAdminForm()}
            {this.showNewEventForm()}
            {this.showNewCohortForm()}
            {this.showEventDetails()}
            {this.showEditCohortForm()}
            {this.showStudentDetails()}

          </div>
        </div>
        <Footer/>
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
)(AdminDashboard);
