import React, { Component } from 'react';
import Footer from '../CommonComponents/Footer';
import StudentNavbar from './StudentNavbar';
import StudentStyles from './../../Student.css'
import { connect } from 'react-redux';
import {getStudentDashboardData} from '.././../service';
import StudentEventsList from './StudentEventsList';
import StudentCohortDetails from './StudentCohortDetails';
import StudentAssignmentsContainer from './StudentAssignmentsContainer';
import AdminEventDetails from './../AdminComponents/AdminEventDetails'



class StudentDashboard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cohort: {},
      student: {},
      classmates: [],
      assignments: [],
      submissions: [],
      events: [],
      submission_comments: [],
      showEventDetails: false,

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

  TriggerEventDetails = (event) => {this.setState({showEventDetails: event})}

  showEventDetails = () => {
    if (this.state.showEventDetails ) {
      return (
          <AdminEventDetails
          events={this.state.events}
          eventId = {this.state.showEventDetails.id}
          eventSuccess = {this.reload}
          escapeEventDetailsModal = {this.escapeEventDetailsModal}
          event = {this.state.showEventDetails}
        />
      )
    }
  }
  escapeEventDetailsModal = () => {this.setState({showEventDetails: false})}




  reload = () =>{
    if(this.props.token != null){
      getStudentDashboardData(this.props.token)
      .then(response=>response.json())
      .then(response=> {this.setState({
        cohort: response.cohort,
        classmates: response.students,
        assignments: response.assignments,
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
            studentFirstName={this.state.student.first_name}
            studentLastName={this.state.student.last_name}
            name={this.state.cohort.name}
            course_type={this.state.cohort.course_type}
            start_date={this.state.cohort.start_date}
            end_date={this.state.cohort.end_date}
          />

        <StudentEventsList 
          events={this.state.events} />

          <StudentAssignmentsContainer
            assignments={this.state.assignments}
            submissions={this.state.submissions}
            submissionComments={this.state.submissionComments}
            onFocusData={this.state.onFocusData}
          />
          {this.showEventDetails()}
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
