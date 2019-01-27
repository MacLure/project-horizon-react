import React, { Component } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin-left: 140px;
`

class Settings extends Component {

  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Title>Settings</Title>
        <Footer/>
      </React.Fragment>
    );
  }

}

export default Settings;
