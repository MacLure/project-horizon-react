import React from 'react';
import styled from 'styled-components';
import CohortProgressCircle from './CohortProgressCircle'

const Card = styled.div`
  background-color: rgba(42, 44, 51, 1);
  margin: 20px 10px;
  width: 23vw;
  border-radius: 2px;
  border: 3px solid rgba(42, 44, 51, 1);
  grid-column-start: 1;
  transition: 0.2s;
  opacity: 1;
  cursor: pointer;
  display: inline-block;


  :hover {
    background-color: rgba(42, 44, 51, 0.5);
    transition: 0.2s;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3;
  background-color: transparent;
  padding-left: 20px;
`

const CohortName = styled.h3`
  padding-top: 20px;
  padding-bottom: 7px;
  background-color: transparent;
  text-align: left;
  grid-column-start: 1;
  grid-row-start: 1;
`
const Dates = styled.p`
  background-color: transparent;
  color: gray;
  font-size: 14px;
  text-align: left;
  padding-bottom: 7px;
  grid-column-start: 1;
  grid-row-start: 2;
`

const Text = styled.p`
  background-color: transparent;
  text-align: left;
  padding-bottom: 14px;
  grid-column-start: 1;
  grid-row-start: 3;
`

const Progress = styled.div`
  margin-top: 35px;
  margin-right: 10px;
`

const CohortCard = (props) => {

  const {start_date, end_date, name, id} = props.data
  const formattedStartDate = new Date(Date.parse(start_date))
  const formattedEndDate = new Date(Date.parse(end_date))
  const options = {year: 'numeric', month: 'short', day: 'numeric' };

  const courseDays = Math.trunc((Date.parse(end_date) - Date.parse(start_date)) / (1000 * 60 * 60 * 24))
  const daysLeft = Math.trunc((Date.parse(end_date) - Date.now()) / (1000 * 60 * 60 * 24))

  const daysLeftDisplay = () => {
    if (daysLeft > courseDays){
      return `Starts on ${formattedStartDate.toLocaleString('en', options)}.`
    } else if (daysLeft <= 0 ) {
      return `Ended on ${formattedEndDate.toLocaleString('en', options)}.`
    } else if (daysLeft > 0){
      return `${daysLeft} days left`
    }
  }

  const courseProgress = () => {
    if (daysLeft <= 0) return 100;
    else if (daysLeft > courseDays) return 0;
    else if (daysLeft > 0) {
      return Math.round( 100 - daysLeft / courseDays * 100)
    }
  }

  return (
    <React.Fragment>
      <Card
        style={{border:props.isActive ? "3px solid #FC6404": ""}}
        onClick={e=>{props.onCohortClick(props.data)}}
      >
      <Grid>
        <CohortName>{name}</CohortName>
        <Dates>{formattedStartDate.toLocaleString('en', options)} - {formattedEndDate.toLocaleString('en', options)}</Dates>
        <Text>{daysLeftDisplay()}</Text>
      </Grid>
        <Progress><CohortProgressCircle progress={courseProgress}/></Progress>
      </Card>
    </React.Fragment>
   );
  }

export default CohortCard;
