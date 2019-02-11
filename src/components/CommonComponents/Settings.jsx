import React, { Component } from 'react';
import Footer from './Footer';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin-left: 140px;
`

class Settings extends Component {

  render() {
    return (
      <React.Fragment>
        <Title>Settings</Title>
        <Footer/>
      </React.Fragment>
    );
  }

}

export default Settings;
