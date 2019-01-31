import React, { Component } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import styled from 'styled-components';
import JobFeed from './JobFeed'
import { connect } from 'react-redux';
import  {getStudentDashboardData} from './../service';
import StudentAssignment from './StudentAssignment';
import StudentEvent from './StudentEvent';
import StudentCohortDetails from './StudentCohortDetails';

const Title = styled.h1`
  text-align: center;
  margin-left: 140px;
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

    return (
      <React.Fragment>
          <NavBar/>
          <Title>Student Dashboard</Title>
          <StudentCohortDetails 
            name={this.state.cohort.name}
            course_type={this.state.cohort.course_type}
            start_date={this.state.cohort.start_date}
            end_date={this.state.cohort.end_date}
          />
          {this.state.assignments.map(assignment => (
            <StudentAssignment 
              key={assignment.id}
              name={assignment.name}
              body={assignment.body}
              dueDate={assignment.due_date}
            />
          ))}
          {this.state.events.map(event => (
            <StudentEvent 
              key={event.id}
              name={event.name}
              body={event.body}
              date={event.date}
              time={event.time}
            />
          ))}
          ** ------------------------------Each assignment has submissions, and each submission has comments.  Not sure how we want to display them, but they're available.  I will work on an asignments progress calculator and other methods.  We also have classmates data if we want to use it.
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
