import React from 'react';
import CohortProgressCircle from './CohortProgressCircle';
import AdminStyles from './../../Admin.css'

const CohortCard = (props) => {

  const {start_date, end_date, name, course_type, id} = props.data
  const formattedStartDate = new Date(Date.parse(start_date))
  const formattedEndDate = new Date(Date.parse(end_date))
  const options = {year: 'numeric', month: 'short', day: 'numeric' };

  const courseDays = Math.trunc((Date.parse(end_date) - Date.parse(start_date)) / (1000 * 60 * 60 * 24))
  const daysLeft = Math.trunc((Date.parse(end_date) - Date.now()) / (1000 * 60 * 60 * 24))

  const daysLeftDisplay = () => {
    if (daysLeft > courseDays){
      return `Starts ${formattedStartDate.toLocaleString('en', options)}`
    } else if (daysLeft <= 0 ) {
      return `Ended ${formattedEndDate.toLocaleString('en', options)}`
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

  const getDescriptiveCourseType = (cohortName) => {
    if (cohortName === "wdi") {
      return "Web Development"
    } else if (cohortName === "uxdi") {
      return "UX / UI"
    } else if (cohortName === "dsi") {
      return "Data Science"
  }
}

  return (
    <React.Fragment>
      <div className="card"
        style={{border:props.isActive ? "3px solid #FC6404": ""}}
        onClick={e=>{props.onCohortClick(props.data)}}>
      <div className="cardGrid">
        <div>
          <div>
            <h3 className="cohortName">{name}</h3>
            <h3 className="courseType">{getDescriptiveCourseType(course_type)}</h3>
          </div>
          <div className="dates">
            <div>{formattedStartDate.toLocaleString('en', options)} to</div>
            <div>{formattedEndDate.toLocaleString('en', options)}</div>
          </div>
        </div>
        <div className="progress">
          <CohortProgressCircle progress={courseProgress}/>
        </div>
        <div class="daysLeft">{daysLeftDisplay()}</div>
        </div>
      </div>

    </React.Fragment>
   );
  }

export default CohortCard;
