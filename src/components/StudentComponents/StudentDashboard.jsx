import React, { Component } from 'react';
import Footer from '../CommonComponents/Footer';
import StudentNavbar from './StudentNavbar';
import StudentStyles from './../../Student.css'
import { connect } from 'react-redux';
import {getStudentDashboardData} from '.././../service';
import StudentEventsList from './StudentEventsList';
import StudentCohortDetails from './StudentCohortDetails';
import StudentAssignmentsContainer from './StudentAssignmentsContainer';


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
      localStorage.setItem('jwt', JSON.stringify(this.props.token))
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
        <div className="dashboard">
          <StudentCohortDetails
            name={this.state.cohort.name}
            course_type={this.state.cohort.course_type}
            start_date={this.state.cohort.start_date}
            end_date={this.state.cohort.end_date}
          />

          <div className="eventsContainer">
          {this.state.events.map( event => (
            <div className="eventItem" key={event.id}>
              name={event.name}
              date={event.date}
              time={event.time}
            </div>
              ))}
          </div>

          <StudentAssignmentsContainer
            assignments={this.state.assignments}
            submissions={this.state.submissions}
            submissionComments={this.state.submissionComments}
            onFocusData={this.state.onFocusData}
          />
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
)(StudentDashboard);
