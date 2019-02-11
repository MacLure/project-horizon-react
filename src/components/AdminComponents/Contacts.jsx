import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: rgba(42, 44, 51, 1);
  margin: 20px 10px;
  width: 25vw;
  border-radius: 2px;
  justify-self: center;
  transition: 0.3s;
  opacity: 1;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;

  :hover {
    opacity: 0.5;
    transition: 0.3s;
  }
`

const Title = styled.h1`
  text-align: center;
  margin-left: 140px;
`
const Text = styled.p`
  background-color: inherit;
  color: gray;
  font-size: 14px;
  text-align: left;
  padding-bottom: 7px;
  grid-column-start: 1;
  grid-row-start: 2;
`

class Contacts extends Component {

  render() {
    return (
      <React.Fragment>
        <Card>
          <Title>Contacts</Title>
        </Card>
      </React.Fragment>
    );
  }

}

export default Contacts;
