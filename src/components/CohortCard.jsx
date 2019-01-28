import React from 'react';
import styled from 'styled-components';
import NewStudentForm from './NewStudentForm';


const Card = styled.div`
  background-color: rgba(42, 44, 51, 1);
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  width: 40vw;
  border-radius: 2px;
  grid-column-start: 2;
  grid-row-end: 5;
  justify-self: center;
  transition: 0.5s;
  opacity: 1;
  cursor: pointer;

  :hover {
    background-color: rgba(42, 44, 51, 0.15);
    transition: 0.5s;
  }
`
const CohortName = styled.h3`
  padding-top: 20px;
  padding-left: 80px;
  background-color: inherit;
  text-align: left;
`
const Text = styled.p`
  padding-left: 80px;
  background-color: inherit;
  text-align: left;
  padding-bottom: 20px;
`

const ProgressBarTotal = styled.div`
  background-color: white;
  width: 80%;
  height: 3px;
  margin-left: 80px;
  border-radius: 20px;
`
const ProgressBarFilling = styled.div`
  background-color: #DD3D0F;
  width: 0%;
  height: 100%;
  border-radius: 20px;
`

const CohortCard = (props) => {

  const {start_date, end_date, name, course_type} = props.data

  const formattedStartDate = new Date(Date.parse(start_date))
  const options = {year: 'numeric', month: 'short', day: 'numeric' };
    
  const formattedEndDate = new Date(Date.parse(end_date))
    
  const courseDays = Math.trunc((Date.parse(end_date) - Date.parse(start_date)) / (1000 * 60 * 60 * 24))
  const daysLeft = Math.trunc((Date.parse(end_date) - Date.now()) / (1000 * 60 * 60 * 24))

  const daysLeftDisplay = () => {
    if (daysLeft > courseDays){
      return "This cohort hasn't started yet"
    } else if (daysLeft <= 0 ) {
      return 'This cohort ended on END DATE.'
    } else if (daysLeft > 0){
      return `${daysLeft} days left`
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
      <Card onClick={e=>{
        console.log('Hello:::::')
        props.onCohortClick(props.data)
      }}>
        <CohortName>{name}</CohortName><br/>
        <br/>
        <Text>{formattedStartDate.toLocaleString('en', options)} - {formattedEndDate.toLocaleString('en', options)}</Text><br/>
        <Text>{daysLeftDisplay()}</Text>
        {progressBar()}
      </Card>
    </React.Fragment>
   );

  }

export default CohortCard;
