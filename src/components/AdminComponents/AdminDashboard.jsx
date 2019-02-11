import React, { Component } from 'react';
import CohortCard from './CohortCard';
import CohortDetails from './CohortDetails';
import NewCohortForm from './NewCohortForm';
import Footer from './../CommonComponents/Footer';
import AdminNavBar from './AdminNavBar';
import styled from 'styled-components';
import { connect } from 'react-redux';
import  {getAdminDashboardData} from './../../service';
import NewAssignmentForm from './NewAssignmentForm';
import NewStudentForm from './NewStudentForm';
import NewAdminForm from './NewAdminForm';
import NewEventForm from './NewEventForm';


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`

const CohortCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  grid-column-start: 1;
`
const NewCohortButton = styled.div`
background-color: rgba(42, 44, 51, 1);
margin: 20px 10px;
width: 23vw;
border-radius: 2px;
grid-column-start: 1;
justify-self: center;
transition: 0.2s;
opacity: 1;
cursor: pointer;
display: flex;
justify-content: flex-start;

`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  grid-column-start: 1;
  margin: 20px 60px;
`

class AdminDashboard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: null,
      admins: [],
      cohorts: [].filter(cohort => (Date.parse(cohort.end_date) > Date.now())).slice(0, 7),
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
      selectedCohort: null,
    }
    this.showNewCohortForm = this.showNewCohortForm.bind(this)
  }

  componentDidMount() {
    if(this.props.token != null){
      localStorage.setItem('jwt', JSON.stringify(this.props.token))
      getAdminDashboardData(this.props.token)
      .then(response=>response.json())
      .then(response=> {this.setState({
          id: response.id,
          admins: response.admins,
          cohorts: response.cohorts,
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
    TriggerNewAssignmentForm = (data) => {this.setState({showNewAssignmentForm: true})}
    TriggerNewStudentForm = (data) => {this.setState({showNewStudentForm: true})}
    TriggerNewAdminForm = (data) => {this.setState({showNewAdminForm: true})}
    TriggerNewEventForm = (data) => {this.setState({showNewEventForm: true})}

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

    escapeNewEventModal = () => {this.setState({showNewEventForm: false})}
    escapeNewStudentModal = () => {this.setState({showNewStudentForm: false})}
    escapeNewAssignmentModal = () => {this.setState({showNewAssignmentForm: false})}
    escapeNewCohortModal = () => {this.setState({showNewCohortForm: false})}
    escapeNewAdminModal = () => {this.setState({showNewAdminForm: false})}



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
        cohortStudents={this.getCohortStudents(this.state.students, this.state.onFocusData.id)}
        cohortEvents={this.getCohortEvents(this.state.events, this.state.onFocusData.id)}
        cohortAssignments={this.getCohortAssignments(this.state.assignments, this.state.onFocusData.id)}
        deleteSuccess={this.reload}
        TriggerNewAssignmentForm={this.TriggerNewAssignmentForm}
        TriggerNewStudentForm={this.TriggerNewStudentForm}
        TriggerNewAdminForm={this.TriggerNewAdminForm}
        TriggerNewEventForm={this.TriggerNewEventForm}

      />
    }
    return (
      <React.Fragment>
        <AdminNavBar/>
        <Container>
        <h2>Hello</h2>
          <CohortCards>
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
          <NewCohortButton onClick={this.TriggerNewCohortForm}>
          </NewCohortButton>
          </CohortCards>
          <ContentContainer>
            {CohortDetail}
            {this.showNewAssignmentForm()}
            {this.showNewStudentForm()}
            {this.showNewAdminForm()}
            {this.showNewEventForm()}
            {this.showNewCohortForm()}

          </ContentContainer>
        </Container>
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
