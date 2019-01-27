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
  justify-self: center;
`

// const Title = styled.p`
//
//
// `



const Button = styled.button`
  margin: 30px auto;
  margin-left: 0;
  padding-left: 0;
  cursor: pointer;
  padding: 5px 10px;
  background-color: #DD3D0F;
  border: none;
  opacity: 1;
  transition: opacity 0.5s;
  border-radius: 2px;
  font-size: 1.1em;
  text-align: center;
  grid-column-start: 1;
  grid-row-start: 3;

  :hover {
    opacity: 0.5;
    transition: opacity 0.45;
  }`

const CohortCard = (props) => {
  const {start_date, end_date, name, course_type} = props.data

  function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second-first)/(1000*60*60*24));
}

let startDate = parseDate(start_date)
let endDate = parseDate(end_date)
let daysLeft = datediff(startDate, endDate)

  return (
    <React.Fragment>
      <Card>
        {name}<br/>
        {course_type}<br/>
        <br/>
        {start_date} - {end_date}<br/>
        <Button>add student</Button>
        <Button>edit</Button>
        <p>{daysLeft}</p>
        <br/>
      </Card>
    </React.Fragment>
   );
}

export default CohortCard;
