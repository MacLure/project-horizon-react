import React from 'react';
import styled from 'styled-components';
import ProgressCircle from './ProgressCircle'

const Card = styled.div`
  background-color: rgba(42, 44, 51, 1);
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
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3;
  background-color: inherit;
  padding-left: 20px;
`

const CohortName = styled.h3`
  padding-top: 20px;
  padding-bottom: 7px;
  background-color: inherit;
  text-align: left;
  grid-column-start: 1;
  grid-row-start: 1;
`
const Dates = styled.p`
  background-color: inherit;
  color: gray;
  font-size: 14px;
  text-align: left;
  padding-bottom: 7px;
  grid-column-start: 1;
  grid-row-start: 2;
`

const Text = styled.p`
  background-color: inherit;
  text-align: left;
  padding-bottom: 14px;
  grid-column-start: 1;
  grid-row-start: 3;
`


const CohortCard = (props) => {

  const {start_date, end_date, name} = props.data
  const formattedStartDate = new Date(Date.parse(start_date))
  const formattedEndDate = new Date(Date.parse(end_date))
  const options = {year: 'numeric', month: 'short', day: 'numeric' };

  const courseDays = Math.trunc((Date.parse(end_date) - Date.parse(start_date)) / (1000 * 60 * 60 * 24))
  const daysLeft = Math.trunc((Date.parse(end_date) - Date.now()) / (1000 * 60 * 60 * 24))

  const daysLeftDisplay = () => {
    if (daysLeft > courseDays){
      return `This cohort will start ${formattedStartDate.toLocaleString('en', options)}.`
    } else if (daysLeft <= 0 ) {
      return `This cohort ended on ${formattedEndDate.toLocaleString('en', options)}.`
    } else if (daysLeft > 0){
      return `${daysLeft} days left`
    }
  }

  const courseProgress = () => {
    if (daysLeft > 0) {
      return Math.round( 100 - daysLeft / courseDays * 100)
    }
  }

  return (
    <React.Fragment>
      <Card className={props.isActive ? "slected": ""} onClick={e=>{
        console.log('Hello:::::')
        props.onCohortClick(props.data)
      }}>
      <Grid>
        <CohortName>{name}</CohortName>
        <Dates>{formattedStartDate.toLocaleString('en', options)} - {formattedEndDate.toLocaleString('en', options)}</Dates>
        <Text>{daysLeftDisplay()}</Text>
<<<<<<< HEAD
        {courseProgress() > 0 && courseProgress() < 100 ?  <ProgressCircle progress={courseProgress} style={{backgroundColor: 'inherit', display: 'inline-block'}} /> : ''}

        {progressBar()}
      </Card>
    </React.Fragment>
   );

  }

export default CohortCard;
