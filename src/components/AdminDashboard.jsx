import React, { Component } from 'react';
import CohortCard from './CohortCard';
import CohortDetails from './CohortDetails';
import NewCohortForm from './NewCohortForm';
import Footer from './Footer';
import NavBar from './NavBar';
import styled from 'styled-components';

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
    showNewStudentForm: false
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
    }

    getCohortStudents = (studentArr, cohortId) => {
      let arr = studentArr.filter(student => student.cohort_id === cohortId)
      return arr;
    }


    onCohortClick = (data) => {
      console.log('Cohort Data',data)
      this.setState({onFocusData:data})
    }


  render() {
    const admins = this.state.admins

    let CohortDetail = null;
    if(this.state.onFocusData != null && typeof(this.state.onFocusData) != undefined){
      CohortDetail = <CohortDetails
        onFocusData={this.state.onFocusData}
        students={this.state.students}
        admins={this.state.admins}
        cohortStudents={this.getCohortStudents(this.state.students, this.state.onFocusData.id)}
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
            {this.state.cohorts.map(cohort => (
              <CohortCard key={cohort.id} data={cohort} onCohortClick={this.onCohortClick} />
             ))}
          </CohortCards>
        </Container>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default AdminDashboard;
