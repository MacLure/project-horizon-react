import React, { Component } from 'react';
import CohortCard from './CohortCard';
import CohortDetails from './CohortDetails';
import NewCohortForm from './NewCohortForm';
import Footer from './Footer';
import NavBar from './NavBar';
import styled from 'styled-components';
import { connect } from 'react-redux'


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 140px;
  margin-bottom: 80px;
  padding-top: 40px;
`

const CohortCards = styled.div`
grid-column-start: 1;
grid-row-start: 1;
justify-self: center;
`

class AdminDashboard extends Component {
  state = {
    admins: [],
    cohorts: [],
    students: [],
    student_notes: [],
    assignments: [],
    submissions: [],
    submission_comments: [],
    company_notes: [],
    contact_notes: [],
    events: [],
    onFocusData: null,
    showNewStudentForm: false,
    selectedCohort: -1
  }

    componentDidMount() {
    fetch('https://project-horizon-rails.herokuapp.com/admin',{mode:'cors'})
      .then(response=>response.json())
      .then(response=> { this.setState({
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

    console.log('Token:::::',this.props.token)
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
    
    displayLogOutButton = () => {
      return (this.props.token != null) ? 
      <button style={{backgroundColor:'red'}} onClick = {e=>{this.destroyToken('')}}>------------------------------------------------------------------Log Out</button> :
      ''

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

      />
    }
    return (
      <React.Fragment>
        <NavBar/>
        <Container>
          <NewCohortForm />
          {CohortDetail}
          <br/>
          <CohortCards>
          {this.displayLogOutButton()}
            {this.state.cohorts.map((cohort, index) => (
              <CohortCard key={cohort.id} data={cohort} onCohortClick={this.onCohortClick}
              isActive={this.state.selectedCohort === index}/>
             ))}
          </CohortCards>
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