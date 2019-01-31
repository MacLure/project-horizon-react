import React, { Component } from 'react';
import Footer from './Footer';
import StudentNavbar from './StudentNavbar';
import styled from 'styled-components';
import JobFeed from './JobFeed'
import { connect } from 'react-redux';
import  {getStudentDashboardData} from './../service';
import StudentAssignmentsList from './StudentAssignmentsList';
import StudentEvent from './StudentEvent';
import StudentCohortDetails from './StudentCohortDetails';
import NewSubmissionForm from './NewSubmissionForm'


const Container = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr 1fr;
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
      submissionComments: [],
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
            {this.state.events.map(event => (
          <StudentEvent
            key={event.id}
            name={event.name}
            body={event.body}
            date={event.date}
            time={event.time}
          />
            ))}
            <StudentAssignmentsList
              assignments={this.state.assignments}
              submissions={this.state.submissions}
            />
          ))}
          <NewSubmissionForm />
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
