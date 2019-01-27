import React, { Component } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin-left: 140px;
`

class StudentDashboard extends Component {

  state = { 
    articleIDs: []
   }


  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(response=>response.json())
    .then(response=> { this.setState({
      articleIDs: response
    });
  })
  }

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
