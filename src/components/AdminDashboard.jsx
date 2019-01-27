import React, { Component } from 'react';
import {Link} from "react-router-dom";
import CohortCard from './CohortCard';
import CohortDetails from './CohortDetails';
import NewCohortForm from './NewCohortForm';
import NewStudentForm from './NewStudentForm';
import Footer from './Footer';
import NavBar from './NavBar';
import styled from 'styled-components';
import APIs from './APIs'
import ArticlesFeed from './ArticlesFeed';


const Title = styled.h1`
  text-align: center;
  margin-left: 140px;
`
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 6;
  margin-left: 140px;
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
    students: []
  }

    componentDidMount() {
    fetch('https://project-horizon-rails.herokuapp.com/admin',{mode:'cors'})
      .then(response=>response.json())
      .then(response=> { this.setState({
        admins: response.admins,
        cohorts: response.cohorts,
        students: response.students,
      });
    })
    }
    //POST REQUEST FOR NEW COHORTS
    // handleSubmit(event){
    //   event.preventDefault();
    //   IS THIS THE RIGHT ADDRESS??
    //   fetch('https://project-horizon-rails.herokuapp.com/admin', {
    //    method: 'post',
    //    headers: {'Content-Type':'application/json'},
    //    body: {
    //    THESE ARE UNDEFINED
    //     "start_date": this.startDate.value,
    //     "end_date": this.endDate.value,
    //     "name": this.name.value,
    //     "course_type": this.courseType.value
    //    }
    //   });
    //  };

  render() {
    const admins = this.state.admins
    return (
      <React.Fragment>
        <NavBar/>
        <Title>Admin Dashboard</Title>
        <Container>
          <NewCohortForm />
          <NewStudentForm />
          <CohortDetails cohort={this.state.cohorts} students={this.state.students} admins={this.state.admins} />
          <br/>
          <CohortCards>
            {this.state.cohorts.map(cohort => (
              <CohortCard key={cohort.id} data={cohort} />
             ))}
          </CohortCards>
        </Container>

        <Footer/>
      </React.Fragment>
    );
  }
}

export default AdminDashboard;
