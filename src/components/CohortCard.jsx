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
const Dates = styled.p`
  padding-left: 80px;
  background-color: inherit;
  text-align: left;
`
const ProgressBarTotal = styled.div`
  background-color: white;
  width: 100%;
  height: 3px;
`
const ProgressBarFilling = styled.div`
  background-color: #DD3D0F;
  width: 50%;
  height: 100%;
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
  const courseDays = Math.trunc((Date.parse(end_date) - Date.parse(start_date)) / (1000 * 60 * 60 * 24))
  const daysLeft = Math.trunc((Date.parse(end_date) - Date.now()) / (1000 * 60 * 60 * 24))
  const daysLeftDisplay = () => ( (daysLeft > 0) ? daysLeft + ' days left.': 'This cohort has ended.' )
  const courseProgress = () => {
    if (daysLeft > 0) {
      return Math.round( 100 - daysLeft / courseDays * 100)
    }
  }

  return (
    <React.Fragment>
      <Card>
        <CohortName>{name}</CohortName><br/>
        <Course>{course_type}</Course><br/>
        <br/>
        <Dates>{start_date} - {end_date}</Dates><br/>
        <p>{daysLeftDisplay()} {courseProgress()}%</p>
        <ProgressBarTotal><ProgressBarFilling style={{width: `${courseProgress()}%`}} ></ProgressBarFilling></ProgressBarTotal>
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
