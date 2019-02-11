import React from 'react';
import styled from 'styled-components';
import NewStudentForm from '.StudentComponents/NewStudentForm';


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
const Dates = styled.p`
  padding-left: 80px;
  background-color: inherit;
  text-align: left;
`

const Text = styled.p`
  padding-left: 80px;
  padding-bottom: 20px;
  text-align: left;
`

const ProgressBarTotal = styled.div`
  background-color: white;
  width: 80%;
  height: 3px;
  margin-left: 80px;
`
const ProgressBarFilling = styled.div`
  background-color: #DD3D0F;
  width: 0%;
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
  display: flex;
	flex-direction: column-reverse;

  :hover {
    opacity: 0.5;
    transition: opacity 0.45;
  }`

  // const CollapseButton = styled.buton`
  //
  // `

  const Toggle = styled.div`
    display: flex;
    flex-direction: column-reverse;
    background-color: inherit;
  `

const CohortCard = (props) => {
  const {start_date, end_date, name, course_type} = props.data

  const courseDays = Math.trunc((Date.parse(end_date) - Date.parse(start_date)) / (1000 * 60 * 60 * 24))
  const daysLeft = Math.trunc((Date.parse(end_date) - Date.now()) / (1000 * 60 * 60 * 24))

  const daysLeftDisplay = () => {
    if (daysLeft > courseDays){
      return "This cohort hasn't started yet"
    } else if (daysLeft <= 0 ) {
      return 'This cohort ended on END DATE.'
    } else if (daysLeft > 0){
      return `${daysLeft} days left (${courseProgress()}%)`
    }
  }

  const courseProgress = () => {
    if (daysLeft > 0) {
      return Math.round( 100 - daysLeft / courseDays * 100)
    }
  }
  function progressBar() {
    if (daysLeft > 0 && daysLeft <= courseDays) {
      return (
        <ProgressBarTotal>
          <ProgressBarFilling style={{width: `${courseProgress()}%`}} />
        </ProgressBarTotal>
      );
    }
  }

  return (
    <React.Fragment>
      <Card>
        <CohortName>{name}</CohortName><br/>
        <br/>
        <Dates>{start_date} - {end_date}</Dates><br/>
        <Text>{daysLeftDisplay()}</Text>
        {progressBar()}
        <ButtonGrid>
          <Toggle>
            <Button type="checkbox" value="selected">add student</Button>
          </Toggle>
          <Button>edit</Button>
          <Button>More Details</Button>
          <br/>
        </ButtonGrid>
      </Card>
    </React.Fragment>
   );

  }

export default CohortCard;
