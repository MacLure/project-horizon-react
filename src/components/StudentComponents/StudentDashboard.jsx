import React, { Component } from 'react';
import Footer from '../CommonComponents/Footer';
import StudentNavbar from './StudentNavbar';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {getStudentDashboardData} from '.././../service';
import StudentEventsList from './StudentEventsList';
import StudentCohortDetails from './StudentCohortDetails';
import StudentAssignmentsContainer from './StudentAssignmentsContainer';

const Container = styled.div`
  display: grid;
  margin: 25px 60px;
  grid-template-columns: 1fr;
  grid-template-rows: 2;
`
const Info_EventsGrid = styled.div`
  grid-column-start: 1fr;
  grid-row-start: 1;
  display: grid;
  grid-template-columns:  1fr 1fr;
`

const AssignmentsGrid = styled.div`
  grid-column-start: 1fr;
  grid-row-start: 2;
  display: grid;
  grid-template-columns: 1fr 2fr
`

class StudentDashboard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cohort: {},
      classmates: [],
      assignments: [],
      submissions: [],
      events: [],
      submission_comments: [],
      onFocusData: null

    }
  }

  componentDidMount() {
    if(this.props.token != null){
      getStudentDashboardData(this.props.token)
      .then(response=>response.json())
      .then(response=> {this.setState({
          student: response.student,
          cohort: response.cohort,
          classmates: response.classmates,
          assignments: response.assignments,
          submissions: response.submissions,
          submissionComments: response.submission_comments,
          events: response.events,
        });
      })
    }else{
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <React.Fragment>
        <StudentNavbar/>
        <Container>
          <StudentCohortDetails
            name={this.state.cohort.name}
            course_type={this.state.cohort.course_type}
            start_date={this.state.cohort.start_date}
            end_date={this.state.cohort.end_date}
          />

          <StudentEventsList events = {this.state.events} />

          <StudentAssignmentsContainer
            assignments={this.state.assignments}
            submissions={this.state.submissions}
            submissionComments={this.state.submissionComments}
            onFocusData={this.state.onFocusData}
          />
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
)(StudentDashboard);
