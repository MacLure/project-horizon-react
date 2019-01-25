import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Footer from './Footer';
import NavBar from './NavBar';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin-left: 140px;
`

class StudentDashboard extends Component {
  state = {  }
  render() {
    return (
      <React.Fragment>
          <NavBar/>
          <Title>Student Dashboard</Title>
          <Footer/>
      </React.Fragment>
    );
  }
}

export default StudentDashboard;
