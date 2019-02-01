import React, { Component } from 'react';
import Footer from './Footer';
import StudentNavbar from './StudentNavbar';
import styled from 'styled-components';
import { connect } from 'react-redux';
import  {getStudentDashboardData} from './../service';
import StudentAssignmentsList from './StudentAssignmentsList';
import StudentEventsList from './StudentEventsList';
import StudentCohortDetails from './StudentCohortDetails';
import NewSubmissionForm from './NewSubmissionForm'
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
      onFocusData: ''

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
    document.body.style.backgroundColor = '#212229';


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
            submissions={this.state.submissions}
            assignments={this.state.assignments}
            submission_comments={this.state.cubmission_comments}
          />
        </Container>
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
