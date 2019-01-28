import React, { Component } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import styled from 'styled-components';
import JobFeed from './JobFeed'

const Title = styled.h1`
  text-align: center;
  margin-left: 140px;
`

class StudentDashboard extends Component {

  state = { 
    articleIDs: []
   }


  render() {
    return (
      <React.Fragment>
          <NavBar/>
          <Title>Student Dashboard</Title>
          <div style={{textAlign: 'center'}}>ASSIGNMENTS LIST</div>
          <div style={{textAlign: 'center'}}>EVENTS LIST</div>
          <div style={{textAlign: 'center'}}>(stretch: job feed)</div>
          <div style={{textAlign: 'center'}}>(stretch: article feed)</div>
          <JobFeed />
          <Footer/>
      </React.Fragment>
    );
  }
}

export default StudentDashboard;
