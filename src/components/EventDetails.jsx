import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: inherit
  margin: 20px 10px;
  width: 25vw;
  border-radius: 2px;
  grid-column-start: 1;
  justify-self: center;
  transition: 0.3s;
  opacity: 1;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;

  :hover {
    opacity: 0.5;
    transition: 0.3s;
}`

class EventDetails extends Component {
  constructor(props) {
    super(props)
  this.state ={
  }

}
  render() {

  return (
    <Container>
      <p>Events</p>
    </Container>
    );
  }
}

export default EventDetails;
