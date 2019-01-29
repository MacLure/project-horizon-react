import React, { Component } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin-left: 140px;
`

class Contacts extends Component {

  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Title>Contacts</Title>
        <Footer/>
      </React.Fragment>
    );
  }

}

export default Contacts;
