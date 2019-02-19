import React from 'react';
import CohortProgressCircle from './CohortProgressCircle';
import AdminStyles from './../../Admin.css'

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
      <div className="card"
        style={{border:props.isActive ? "3px solid #FC6404": ""}}
        onClick={e=>{props.onCohortClick(props.data)}}>
      <div className="cardGrid">
        <h3 className="cohortName">{name}</h3>
        <p className="dates">{formattedStartDate.toLocaleString('en', options)} - {formattedEndDate.toLocaleString('en', options)}</p>
        <p className="text">{daysLeftDisplay()}</p>
      </div>
        <div className="progress"><CohortProgressCircle progress={courseProgress}/></div>
      </div>
    </React.Fragment>
   );
  }

export default CohortCard;
