import React, { Component } from 'react';
import Footer from './Footer';
import StudentNavbar from './StudentNavbar';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin-left: 140px;
`

class JobBoard extends Component {

  render() {
    return (
      <React.Fragment>
      <StudentNavbar/>
      <Title>Job Board</Title>
      <Footer/>
      </React.Fragment>
    );
  }

}

export default JobBoard;
