import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
  background-color: #2A2C33;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 40vw;
  border-radius: 2px;
  grid-column-start: 2;
  grid-row-end: 5;
  justify-self: center;
`
const CohortName = styled.h3`
  padding-top: 20px;
  padding-left: 80px;
  background-color: inherit;
  text-align: left;
`

const Course = styled.h3`
  padding-left: 80px;
  background-color: inherit;
  text-align: left;
`
const Date = styled.p`
  padding-left: 80px;
  background-color: inherit;
  text-align: left;
`
const ButtonGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: inherit;
  margin-left: 80px;
`
const Button = styled.button`
  margin: 30px 10px;
  cursor: pointer;
  padding: 5px 10px;
  background-color: #DD3D0F;
  border: none;
  opacity: 1;
  transition: opacity 0.5s;
  border-radius: 2px;
  font-size: 1.1em;
  text-align: center;

  :hover {
    opacity: 0.5;
    transition: opacity 0.45;
  }`

const CohortCard = (props) => {
  const {start_date, end_date, name, course_type} = props.data

  return (
    <React.Fragment>
      <Card>
        <CohortName>{name}</CohortName><br/>
        <Course>{course_type}</Course><br/>
        <br/>
        <Date>{start_date} - {end_date}</Date><br/>
        <ButtonGrid>
          <Button>add student</Button>
          <Button>edit</Button>
          <Button>More Details</Button>
          <br/>
        </ButtonGrid>
      </Card>
    </React.Fragment>
   );
}

export default CohortCard;
