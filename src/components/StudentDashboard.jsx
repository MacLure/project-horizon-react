import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Footer from './Footer';
import NavBar from './NavBar';
import styled from 'styled-components';

class StudentDashboard extends Component {
  state = {  }
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <h1>Student Dashboard</h1>
        <Footer/>
      </React.Fragment>

    );
  }
}

export default StudentDashboard;
